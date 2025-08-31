"use client";
// import type { Metadata } from 'next'
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import clientLogger from "../lib/clientLogger";
import "./globals.css";

// export const metadata: Metadata = {
//   title: 'Tidjani Frontend',
//   description: 'Portfolio website',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60 * 24 * 3, // 3 days
        gcTime: 1000 * 60 * 60 * 24 * 3, // 3 days
      },
    },
    queryCache: new QueryCache({
      onSuccess: (data, query) => {
        clientLogger.info(`Query success for ${query.queryKey}`, data);
      },
      onError: (err, query) => {
        console.error(`Query error for ${query.queryKey}`, err);
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
