import ProgressBar from "@ramonak/react-progress-bar";

interface Props {
  progress: number;
  color: string;
  title: string;
}

const ProgressRow = ({ progress, color, title }: Props) => {
  return (
    <div className="max-md:mb-10 font-semibold">
      <div className="flex justify-between mb-3 text-3xl">
        <h2 className="m-0 text-2xl">{title}</h2>
        <span className="text-2xl">{progress + "%"}</span>
      </div>
      <ProgressBar
        completed={progress}
        bgColor={color}
        height="10px"
        isLabelVisible={false}
        baseBgColor="black"
      />
    </div>
  );
};

export default ProgressRow;
