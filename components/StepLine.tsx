import { FC } from "react";
import Image from "next/image";

const StepLine: FC<Props> = ({ height, handleAdd }) => {
  return (
    <div className="flex flex-col items-center absolute">
      <SmallCircle />
      <Line height={height} />
      <SmallCircle />
      <button
        onClick={handleAdd}
        className="absolute top-[50%] w-[16px] h-[16px] translate-y-[-50%]"
      >
        <Image src="/assets/add.svg" alt="add" width={16} height={16} />
      </button>
    </div>
  );
};

export default StepLine;

type Props = {
  height: number;
  handleAdd: () => void;
};

type LineProps = {
  height: number;
};

const SmallCircle: FC<{}> = () => {
  return <div className="border-[2px] border-primary w-2 h-2 rounded-full" />;
};

const Line: FC<LineProps> = ({ height }) => {
  return <div style={{ height: height - 16 }} className="bg-primary w-[2px]" />;
};
