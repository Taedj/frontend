import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useSlidesCount from "../../hooks/useSlidesCount";
import BackgroundText from "../BackgroundText/BackgroundText";
import Carousel from "./Carousel";
import TestimonialBox from "./TestimonialBox";
import TestimonialModal from "./TestimonialModal";
import { ReviewsClient } from "../../http";

export interface Review {
  client_image?: string;
  client_fullname: string;
  country: string;
  role: string;
  review: string;
  stars: number;
}

const defaultAvatar = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236b7280'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>";

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-open modal if URL contains ?review=true or hash is #leave-review
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("review") === "true" || window.location.hash === "#leave-review") {
        setIsModalOpen(true);
      }
    }
  }, []);

  const { data: reviews = [] } = useQuery<Review[]>({
    queryKey: ["reviews"],
    queryFn: () => ReviewsClient.getAll("/reviews"),
    staleTime: 24 * 60 * 60 * 1000, // 1 day
    placeholderData: [],
  });
  const { slideToShow } = useSlidesCount();
  return (
    <div
      id="Testimonials"
      className="py-20 px-4 sm:px-10 md:px-16 lg:px-20 w-full overflow-hidden bg-bg-dark"
    >
      <div className="max-w-[1224px] mx-auto w-full relative">
        <BackgroundText
          backgroundText="TESTIMONIAL"
          innerText={`Clients & Students\nSpeak`}
        />
        
        {/* Leave a Review Button placed under the title and made even bigger */}
        <div className="mt-8 flex justify-center w-full">
          <div className="relative group">
            {/* Glowing background layer that pulses */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-[#00F2FE] rounded-3xl blur-md opacity-45 group-hover:opacity-85 transition duration-500 animate-pulse"></div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="
                relative px-12 py-5 rounded-3xl font-extrabold text-base sm:text-lg text-white
                bg-primary hover:bg-hover-primary 
                transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02] shadow-2xl shadow-primary/30
                cursor-pointer border border-primary/20
                flex items-center gap-4
              "
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                className="w-6 h-6 text-white"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" 
                />
              </svg>
              <span>Leave a Review</span>
            </button>
          </div>
        </div>

        {/* Carousel Container: Extended to full width for maximum card visualisation */}
        <div className="mt-10 sm:mt-16 md:mt-20 px-2 sm:px-4 md:px-6 w-full max-w-full mx-auto">
          <Carousel slideToShow={slideToShow}>
            {reviews.map((review, index) => (
              <TestimonialBox
                key={index}
                image={review.client_image || defaultAvatar}
                title={review.client_fullname}
                subTitle={`${review.role || "Visitor"} from ${review.country}`}
                testomonial={review.review}
                stars={review.stars}
              />
            ))}
          </Carousel>
        </div>
      </div>

      {/* Floating Testimonial submission window */}
      <TestimonialModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Testimonials;
