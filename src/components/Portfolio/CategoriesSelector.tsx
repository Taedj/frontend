import { useState } from 'react'
import { categories,colors,fontSettings } from '../../constants/constants'

interface Props {
  categoryHandler:Function
}

const CategoriesSelector = ({categoryHandler}:Props) => {
  const [selectedCategory,setSelectedCategory] = useState('All')
  return (
    <div className='text-[1.6rem] font-normal my-[4.8rem] mx-0'
      style={{
        fontFamily:fontSettings.fontFamily,
        color:colors.categoriesSelectorColor
      }}
    >
      <ul className='flex list-none justify-center'>
        {categories.map((categoryText) => <li className='flex flex-col items-center py-[0.96rem] px-[1.6rem] w-[10rem] hover:cursor-pointer' onClick={() => {
          categoryHandler(categoryText);
          setSelectedCategory(categoryText);
          }}>
          {(selectedCategory === categoryText) ? <p style={{color:colors.primaryColor}}>{categoryText}</p> : <p>{categoryText}</p>}
          {selectedCategory === categoryText && <span className='block mx-[31.5rem] w-[8rem] h-[3px] leading-[5.4rem] mt-[1.2rem]' style={{backgroundColor:colors.primaryColor}}></span>}
        </li>)}
      </ul>
    </div>
  )
}

export default CategoriesSelector;