interface Props {
  backgroundText:string,
  innerText:string;
}

const BackgroundText = ({backgroundText,innerText}:Props) => {
  return (
<div className="relative flex flex-col justify-center items-center text-center text-white p-4 sm:p-6 md:p-0">
  {/* Background text */}
  <h2
    className="
      m-0 opacity-10 text-bg-text-dark font-[550] leading-none
      text-[15vw]          /* phones */
      sm:text-[12vw]       /* tablets */
      md:text-[11vw]       /* medium screens */
      lg:text-[10vw]       /* keep it fluid on large screens */
      xl:text-[13.2rem]    /* lock size only on very large screens */
    "
  >
    {backgroundText}
  </h2>

  {/* Foreground inner text */}
  <p className="absolute flex flex-col self-center text-6xl font-semibold max-sm:whitespace-pre-line">
    {innerText}
    <span className="block mx-[31.5rem] w-32 h-1 leading-22 bg-primary mt-2"></span>
  </p>
</div>

  )
}

export default BackgroundText