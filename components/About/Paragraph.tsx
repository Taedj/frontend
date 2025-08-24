
interface Props {
  fullname?:string;
  description?:string;
}

const Paragraph = ({fullname,description}:Props) => {
  return (
    <div className="mt-12 px-5">
      <h1 className="text-5xl mb-6 font-semibold">
        I'm <span className="text-primary">{fullname}</span>
      </h1>
      <p className="text-justify mb-10 leading-relaxed text-bg-text-less-dark">
        {description}
      </p>
    </div>
  )
}

export default Paragraph