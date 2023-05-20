import StepBox from "@/components/StepBox";
import StepLine from "@/components/StepLine";
import { FC } from "react";
import { StepType } from "@/constant";

const TaskFlow: FC<Props> = ({
  stepsData,
  getNextStepPos,
  handleOptional,
  handleClose,
  handleAddExtra,
  allTasksAdded,
}) => {
  return (
    <div
      style={{ backgroundImage: "url('/assets/task-flow-bg.svg')" }}
      className="w-1/3 px-12"
    >
      <p className="pt-5 text-center font-semibold text-secondary">Task Flow</p>
      <div
        className={`py-8 grid ${
          allTasksAdded ? "" : "grid-cols-[135px_45px_135px]"
        } gap-y-10 justify-center`}
      >
        {stepsData.map((step: StepType, index: number) => {
          const { position, isInTaskFlow, stepName, type } = step;
          const colStart = isInTaskFlow ? 2 : 1;
          const colEnd = isInTaskFlow ? 3 : 2;
          const nextStepPos =
            index < stepsData.length - 1 ? getNextStepPos(position) : 0;
          const heightOfSingleBlock = 48;
          const spacingBetweenBlocks = 40;
          const height =
            (nextStepPos - position) * spacingBetweenBlocks +
            (nextStepPos - position - 1) * heightOfSingleBlock;
          return (
            <div
              style={{
                gridArea: `${position} / ${colStart} / ${
                  position + 1
                } / ${colEnd}`,
              }}
              key={position}
            >
              <StepBox
                text={stepName}
                type={type}
                onClick={() => handleOptional(true, position)}
                onClose={() => handleClose(position)}
                isInTaskFlow={isInTaskFlow}
              />
              {isInTaskFlow && index !== stepsData.length - 1 && (
                <div className={`flex justify-center w-[180px]`}>
                  <StepLine
                    handleAdd={() => handleAddExtra(position)}
                    height={height}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskFlow;

type Props = {
  stepsData: Array<StepType>;
  getNextStepPos: (pos: number) => number;
  handleOptional: (checked: boolean, pos: number) => void;
  handleClose: (pos: number) => void;
  handleAddExtra: (pos: number) => void;
  allTasksAdded: boolean;
};
