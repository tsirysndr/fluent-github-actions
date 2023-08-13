import { StepSpec } from "./step_spec.ts";

export type JobSpec = {
  "runs-on": string;
  strategy?: {
    matrix: {
      [key: string]:
        | string[]
        | {
            [key: string]: string;
          };
    };
  };
  steps: StepSpec[];
};
