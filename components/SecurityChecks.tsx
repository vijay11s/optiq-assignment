import { StepType } from "@/constant";
import { FC } from "react";
import ToggleSwitch from "@/components/ToggleSwitch";

const SecurityChecks: FC<Props> = ({ checkList, handleChange }) => {
  return (
    <div className="pt-5 pb-8 w-2/3 px-5">
      <p className="text-[#262626] text-lg pb-4 border-b-[2px] border-[#ECEEF2] font-bold">
        Security Checks
      </p>
      {checkList.map((step: StepType) => (
        <div
          key={step.position}
          className="py-4 border-b-[2px] border-[#ECEEF2]"
        >
          <ToggleSwitch
            id={`${step.position}`}
            text={step.securityName || ""}
            callback={(check: boolean) => handleChange(check, step.position)}
            defaultValue={step.isInTaskFlow}
          />
        </div>
      ))}
    </div>
  );
};

export default SecurityChecks;

type Props = {
  checkList: Array<StepType>;
  handleChange: (check: boolean, pos: number) => void;
};
