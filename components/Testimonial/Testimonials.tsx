import axios from 'axios'
import { useEffect, useState } from 'react'
import useSlidesCount from '../../hooks/useSlidesCount'
import BackgroundText from '../BackgroundText/BackgroundText'
import Carousel from './Carousel'
import TestimonialBox from './TestimonialBox'



interface Review {
  client_image: string;
  client_fullname: string;
  country: string;
  review: string;
}

const Testimonials = () => {
  const [reviews,setReviews] = useState<Review[]>([]);
  const {slideToShow} = useSlidesCount();
  useEffect(
    () => {
      axios.get('http://localhost:8000/home/reviews').then(res => setReviews(res.data))
    }
  ,[])
  return (
    <div id="Testimonials" className="py-20 px-4 sm:px-10 md:px-16 lg:px-20 w-full overflow-hidden bg-bg-dark">
      <div className="max-w-[1224px] mx-auto w-full">
        <BackgroundText backgroundText="TESTIMONIAL" innerText={`Clients & Students\nSpeak`} />
        <div className="mt-10 sm:mt-16 md:mt-20 px-2 sm:px-6 md:px-8 max-w-full sm:max-w-[90%] md:max-w-[80%] mx-auto">
          <Carousel slideToShow={slideToShow}>
            {reviews.map((review,index) => (
              <TestimonialBox
                key={index}
                image={'http://127.0.0.1:8000'+review.client_image}
                title={review.client_fullname}
                subTitle={`User from ${review.country}`}
                testomonial={review.review}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonials