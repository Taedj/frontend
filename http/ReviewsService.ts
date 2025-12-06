import { Review } from "../components/Testimonial/Testimonials";
import ApiClient from "./apiClient";

const ReviewsClient = new ApiClient<Review>("/home");

export default ReviewsClient;
