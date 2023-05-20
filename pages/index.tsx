import Header from "@/components/Header";
import SecurityChecks from "@/components/SecurityChecks";
import TaskFlow from "@/components/TaskFlow";
import { data, StepType } from "@/constant";
import { useState } from "react";

export default function Home() {
  const [stepsData, setStepsData] = useState<Array<StepType>>(data);

  const checkList = stepsData.filter(
    (step: StepType) => step.type === "OPTIONAL"
  );

  const allTasksAdded =
    stepsData.filter((step: StepType) => step.isInTaskFlow).length ===
    stepsData.length;

  function getNextStepPos(position: number): number {
    let pos = 0;
    for (let i = position; i < stepsData.length; i++) {
      if (stepsData[i].isInTaskFlow) {
        pos = stepsData[i].position;
        break;
      }
    }
    return pos;
  }

  function handleOptional(checked: boolean, pos: number): void {
    const newStepsData = structuredClone(stepsData);
    newStepsData.forEach((step: StepType) => {
      if (pos === step.position) {
        step.isInTaskFlow = checked;
      }
    });
    setStepsData(newStepsData);
  }

  function handleAddExtra(pos: number): void {
    let newStepsData = structuredClone(stepsData);
    const newStep: StepType = {
      position: pos + 1,
      stepName: "untitled script",
      isInTaskFlow: true,
      type: "EXTRA",
    };
    const postSteps = newStepsData.slice(pos);
    const preSteps = newStepsData.slice(0, pos);
    preSteps.push(newStep);
    newStepsData = preSteps.concat(postSteps);
    for (let i = pos + 1; i < newStepsData.length; i++) {
      newStepsData[i].position += 1;
    }
    setStepsData(newStepsData);
  }

  function handleClose(pos: number): void {
    let newStepsData = structuredClone(stepsData);
    newStepsData = newStepsData
      .slice(0, pos - 1)
      .concat(newStepsData.slice(pos));
    for (let i = pos - 1; i < newStepsData.length; i++) {
      newStepsData[i].position -= 1;
    }
    setStepsData(newStepsData);
  }

  return (
    <main
      className={`flex flex-col min-h-screen justify-center w-4/5 mx-auto py-10`}
    >
      <Header />
      <div className="flex justify-between border-[2px] border-[#ECEEF2] rounded-b-md">
        <TaskFlow
          stepsData={stepsData}
          getNextStepPos={getNextStepPos}
          handleAddExtra={handleAddExtra}
          handleOptional={handleOptional}
          handleClose={handleClose}
          allTasksAdded={allTasksAdded}
        />
        <SecurityChecks checkList={checkList} handleChange={handleOptional} />
      </div>
    </main>
  );
}
