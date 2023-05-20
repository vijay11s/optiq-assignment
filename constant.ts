export const data: Array<StepType> = [
  {
    position: 1,
    stepName: "GIT Checkout",
    isInTaskFlow: true,
    type: "MANDATORY",
  },
  {
    position: 2,
    stepName: "Code Analysis",
    isInTaskFlow: false,
    type: "OPTIONAL",
    securityName: "Static Code Analysis",
  },
  {
    position: 3,
    stepName: "Credential Scan",
    isInTaskFlow: false,
    type: "OPTIONAL",
    securityName: "Credential Scan",
  },
  {
    position: 4,
    stepName: "Docker Build",
    isInTaskFlow: true,
    type: "MANDATORY",
  },
  {
    position: 5,
    stepName: "Docker Image Scan",
    isInTaskFlow: false,
    type: "OPTIONAL",
    securityName: "Docker Image Scan",
  },
  {
    position: 6,
    stepName: "Docker Push",
    isInTaskFlow: true,
    type: "MANDATORY",
  },
];

export type StepType = {
  position: number;
  stepName: string;
  isInTaskFlow: boolean;
  type: TaskType;
  securityName?: string;
};

export type TaskType = "MANDATORY" | "OPTIONAL" | "EXTRA";
