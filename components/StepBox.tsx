import Image from "next/image";
import { FC, useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { TaskType } from "@/constant";

const StepBox: FC<Props> = ({ text, type, onClick, onClose, isInTaskFlow }) => {
  const isOptional = type === "OPTIONAL" && !isInTaskFlow;
  const isExtra = type === "EXTRA";

  const [showClose, setShowClose] = useState<boolean>(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => (isExtra && onClose ? setShowClose(true) : void 0)}
      onMouseLeave={() => (isExtra && onClose ? setShowClose(false) : void 0)}
    >
      <div
        onClick={() => (isOptional && onClick ? onClick() : void 0)}
        className={`text-[#595959] relative min-w-[180px] text-sm flex gap-1 justify-center items-center py-3 border-[2px] border-[#ECEEF2] rounded-md font-semibold ${
          isOptional ? "cursor-pointer text-primary" : ""
        } ${
          isExtra ? "border-primary bg-primary bg-opacity-[0.05]" : "bg-white"
        }`}
      >
        {isOptional ? <BiPlusCircle className="text-base" /> : null}
        <p>{text}</p>
        {showClose ? (
          <button
            onClick={onClose}
            className={`absolute z-[10] top-[-6px] right-[-6px] text-[#F44336] text-base cursor-pointer ${
              !isExtra ? "hidden" : "block"
            }`}
          >
            <Image
              src="/assets/close-icon.svg"
              alt="close"
              width={16}
              height={16}
            />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default StepBox;

type Props = {
  text: string;
  type: TaskType;
  onClick?: () => void;
  onClose?: () => void;
  isInTaskFlow: boolean;
};
