import axios from 'axios'
import { useEffect, useState } from 'react'
import { colors, fontSettings } from '../../constants/constants'
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

const authHeader = {
  'Authorization':'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU1ODQ1NTQwLCJpYXQiOjE3NTQ4OTUxNDAsImp0aSI6IjQxYjVlYTU5MTkxZDRkNzc4YWY1Zjg1YWM2NjAxYzlhIiwidXNlcl9pZCI6MX0.cYkU0PGodt2u_38FDL0d9HhcKVhvBpjLMZSZKNoxuUY'
}

const Testimonials = () => {
  const [reviews,setReviews] = useState<Review[]>([]);
  const {slideToShow} = useSlidesCount();
  useEffect(
    () => {
      axios.get('http://localhost:8000/home/reviews').then(res => setReviews(res.data))
      console.log('reviews',reviews)
    }
  ,[])
  return (
    <div id='Testimonials' className='py-[7.2rem] px-[4.8rem] w-full overflow-hidden'
      style={{
        backgroundColor:colors.backgroundDarkColor,
        fontFamily:fontSettings.fontFamily
      }}
    >
      <div className='max-w-[1224px] mx-auto w-full'>
        <BackgroundText backgroundText='TESTIMONIAL' innerText='Clients & Students Speak'/>
        <div className='mt-[4.8rem] py-0 px-[2rem] max-w-[80%] mx-auto'>
          <Carousel slideToShow={slideToShow}>
            {reviews.map((review,index) => (
              <TestimonialBox key={index} image={'http://127.0.0.1:8000'+review.client_image} title={review.client_fullname} subTitle={`User from ${review.country}`} testomonial={review.review}/>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonials