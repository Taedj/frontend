import React from 'react'
import { colors } from '../../constants/constants'

const Paragraph = () => {
  return (
    <div className='mt-[4.8rem] py-0 px-[1.2rem]'>
        <h1 className='text-[2.8rem] mb-[1.6rem] text-white'>
            I'm <span className='text-left' style={{color:colors.primaryColor}}>Tidjani Zitouni,</span> a Mechanical Engineer
        </h1>
        <p className='mb-[1.6rem] leading-[2.8rem]' style={{color:colors.backgroundLessTextDarkColor}}>
            I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p className='mb-[1.6rem] leading-[2.8rem]' style={{color:colors.backgroundLessTextDarkColor}}>
            Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
        </p>
    </div>

  )
}

export default Paragraph