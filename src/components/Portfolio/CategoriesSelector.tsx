import { categories,colors,fontSettings } from '../../constants/constants'

interface Props {
  categoryHandler:Function
}

const CategoriesSelector = ({categoryHandler}:Props) => {
  return (
    <div className='text-[1.6rem] font-normal my-[4.8rem] mx-0'
      style={{
        fontFamily:fontSettings.fontFamily,
        color:colors.categoriesSelectorColor
      }}
    >
      <ul className='flex list-none justify-center'>
        {categories.map((categoryText) => <li className='py-[0.96rem] px-[1.6rem]' onClick={() => categoryHandler(categoryText)}>{categoryText}</li>)}
      </ul>
    </div>
  )
}

export default CategoriesSelector