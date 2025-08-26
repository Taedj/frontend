
interface Props {
  year:string;
  title:string;
  subTitle:string;
  children:string;
}

const SummaryBox = ({year,title,subTitle,children}:Props) => {
  return (
    <div className='p-10 sm:m-10 rounded bg-summary-box-bg'>
      <span className='h-10 w-41 text-2xl rounded py-2 px-4 bg-primary'>
        {year}
      </span>
      <h1 className='text-4xl !mt-8 !mb-3'>
        {title}
      </h1>
      <h2 className='text-3xl leading-12 mb-6 text-primary'>
        {subTitle}
      </h2>
      <p className='text-3xl leading-12 text-bg-text-less-dark'>
        {children}
      </p>
    </div>
  )
}

export default SummaryBox