import { useState } from 'react';
import { categories, colors, fontSettings } from '../../constants/constants';

interface Props {
  categoryHandler:Function
}

const CategoriesSelector = ({categoryHandler}:Props) => {
  const [selectedCategory,setSelectedCategory] = useState('All')
  return (
    <div className='text-2xl font-normal my-19 mx-0 text-categories-selector'
      style={{
        fontFamily:fontSettings.fontFamily,
      }}
    >
      <ul className='flex list-none justify-center'>
        {categories.map((categoryText) => <li key={categoryText} className='flex flex-col items-center py-4 px-6 w-40 hover:cursor-pointer' onClick={() => {
          categoryHandler(categoryText);
          setSelectedCategory(categoryText);
          }}>
          {(selectedCategory === categoryText) ? <p className='text-primary'>{categoryText}</p> : <p>{categoryText}</p>}
          {selectedCategory === categoryText && <span className='block mx-[31.5rem] w-32 h-1 leading-22 mt-5 bg-primary'></span>}
        </li>)}
      </ul>
    </div>
  )
}

export default CategoriesSelector;