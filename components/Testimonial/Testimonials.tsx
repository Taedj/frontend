import { useState } from "react";
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
        
        {/* Let Your Comment Button */}
        <div className="mt-8 md:mt-0 flex justify-center md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:z-10">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="
              px-6 py-3 rounded-xl font-bold text-sm text-white
              bg-primary hover:bg-hover-primary 
              transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primary/20
              cursor-pointer border border-primary/10
            "
          >
            Let Your Comment
          </button>
        </div>

        <div className="mt-10 sm:mt-16 md:mt-20 px-2 sm:px-6 md:px-8 max-w-full sm:max-w-[90%] md:max-w-[80%] mx-auto">
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
