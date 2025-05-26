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

const Testimonials = ({ fontSize, isMobile,slideToShow }: Props) => {
  const [works,setWorks] = useState<object[]>([]);
  const [reviews,setReviews] = useState<object[]>([]);
  useEffect(
    () => {
      axios.get('http://127.0.0.1:8000/home/works').then(res => setWorks(res.data));
      works.forEach(
        work => axios.get(
          `http://127.0.0.1:8000/home/works/${work.id}/reviews`
        ).then(res => setReviews([...reviews,res.data[0]])))
    }
  ,[])
  console.log(reviews);
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
            {/* <TestimonialBox 
              image={image1} 
              title="Daniel Xavier" 
              subTitle="User from Spain" 
              testomonial="Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure."
            />
            <TestimonialBox 
              image={image2} 
              title="Daniel Xavier" 
              subTitle="User from Spain" 
              testomonial="Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure."
            />
            <TestimonialBox 
              image={image1} 
              title="Daniel Xavier" 
              subTitle="User from Spain" 
              testomonial="Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure."
            /> */}
            {reviews.map((review,index) => {
              <TestimonialBox key={index} image={reviews[0].client_image} title={reviews[0].client_fullname} subTitle={`User from ${reviews[0].country}`} testomonial={reviews[0].review}/>
            })}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonials