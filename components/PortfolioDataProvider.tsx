"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

interface WarmupData {
  config?: unknown;
  services?: unknown;
  skills?: unknown;
  works?: unknown;
  educations?: unknown;
  experiences?: unknown;
  reviews?: unknown;
  categories?: unknown;
}

interface PortfolioContextType {
  isWarmedUp: boolean;
}

const PortfolioContext = createContext<PortfolioContextType>({
  isWarmedUp: false,
});

export const usePortfolioContext = () => useContext(PortfolioContext);

/**
 * PortfolioDataProvider pre-fetches all backend data from the cached
 * /api/warmup route, then seeds the React Query cache so individual
 * hooks (useConfig, useServices, etc.) find their data already loaded.
 * 
 * This eliminates the Koyeb cold-start wait for visitors because
 * /api/warmup is cached on Vercel's edge (s-maxage=600).
 */
export const PortfolioDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const queryClient = useQueryClient();
  const [isWarmedUp, setIsWarmedUp] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const prefetch = async () => {
      try {
        const res = await fetch("/api/warmup");
        if (!res.ok) {
          console.warn("[PortfolioData] Warmup fetch failed, falling back to direct hooks");
          setIsWarmedUp(true);
          return;
        }

        const { data } = (await res.json()) as { data: WarmupData };

        if (cancelled) return;

        // Seed each React Query cache entry so individual hooks
        // find data already available (no loading spinners).
        if (data.config) {
          // useConfig expects configs[0], so we replicate that
          const configArray = Array.isArray(data.config) ? data.config : [data.config];
          queryClient.setQueryData(["config"], configArray[0]);
        }
        if (data.services) {
          queryClient.setQueryData(["services"], data.services);
        }
        if (data.skills) {
          queryClient.setQueryData(["skills"], data.skills);
        }
        if (data.works) {
          queryClient.setQueryData(["works"], data.works);
        }
        if (data.educations) {
          queryClient.setQueryData(["educations"], data.educations);
        }
        if (data.experiences) {
          queryClient.setQueryData(["experiences"], data.experiences);
        }
        if (data.categories) {
          // useCategories has its own transform (adds "All" + maps .category)
          // We pre-seed the raw categories so the hook's queryFn can transform them.
          // Since useCategories uses its own queryFn, we seed the transformed result directly.
          const rawCategories = data.categories as Array<{ category: string }>;
          const transformed = ["All", ...rawCategories.map((item) => item.category)];
          queryClient.setQueryData(["categories"], transformed);
        }
        if (data.reviews) {
          queryClient.setQueryData(["reviews"], data.reviews);
        }

        console.log("[PortfolioData] Cache seeded from warmup route");
      } catch (err) {
        console.warn("[PortfolioData] Warmup error, hooks will fetch directly:", err);
      } finally {
        if (!cancelled) setIsWarmedUp(true);
      }
    };

    prefetch();
    return () => {
      cancelled = true;
    };
  }, [queryClient]);

  return (
    <PortfolioContext.Provider value={{ isWarmedUp }}>
      {children}
    </PortfolioContext.Provider>
  );
};
