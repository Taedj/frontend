import {useEffect,useState} from 'react'
import axios from 'axios'
import BackgroundText from '../BackgroundText/BackgroundText'
import TestimonialBox from './TestimonialBox'
import { colors,fontSettings } from '../../constants/constants'
import image1 from '../../assets/images/danxavier.jpg'
import image2 from '../../assets/images/negro.jpg'
import Carousel from './Carousel'

interface Props {
  fontSize: string;
  isMobile: boolean;
  slideToShow:number;
}

interface Review {
  client_image: string;
  client_fullname: string;
  country: string;
  review: string;
}

const authHeader = {
  'Authorization':'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ5MTkwODM1LCJpYXQiOjE3NDgyNDA0MzUsImp0aSI6Ijg2ZjY0MDkyZTM5ZjRlMTc5NzAwNThhZjUyNjBjZjdmIiwidXNlcl9pZCI6Mn0.nqXD3IpCxDUaFWt--AHlcnFNXdjKXBlFD-jZcrkRrns'
}

const Testimonials = ({ fontSize, isMobile,slideToShow }: Props) => {
  const [works,setWorks] = useState<object[]>([]);
  const [reviews,setReviews] = useState<Review[]>([]);
  useEffect(
    () => {
      axios.get('http://127.0.0.1:8000/home/works').then(res => setWorks(res.data));
      axios.get(`http://127.0.0.1:8000/home/works/2/reviews`,{headers:authHeader})
        .then(res => setReviews(prevReviews => [...prevReviews, res.data[0]]))
    //   works.forEach(
    //     work => axios.get(
    //       `http://127.0.0.1:8000/home/works/${work.id}/reviews`
    //     ).then(res => setReviews([...reviews,res.data[0]])))
    }
  ,[])
  console.log('works',works);
  console.log('reviews',reviews);
  return (
    <div id='Testimonials' className='py-[7.2rem] px-[4.8rem] w-full overflow-hidden'
      style={{
        backgroundColor:colors.backgroundDarkColor,
        fontFamily:fontSettings.fontFamily
      }}
    >
      <div className='max-w-[1224px] mx-auto w-full'>
        <BackgroundText backgroundText='TESTIMONIAL' innerText='Client Speak' fontSize={fontSize}/>
        <div className='mt-[4.8rem] py-0 px-[2rem] max-w-[80%] mx-auto'>
          <Carousel slideToShow={slideToShow}>
            {reviews.map((review,index) => (
              <TestimonialBox key={index} image={review.client_image} title={review.client_fullname} subTitle={`User from ${review.country}`} testomonial={review.review}/>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonials