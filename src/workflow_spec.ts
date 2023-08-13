import { EventSpec } from "./event.ts";

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
  steps: {
    name?: string;
    uses?: string;
    run?: string;
    env?: {
      [key: string]: string;
    };
    with?: {
      [key: string]: string;
    };
  }[];
};

type WorkflowSpec = {
  name: string;
  on: EventSpec;
  env?: {
    [key: string]: string;
  };
  jobs: {
    [jobId: string]: JobSpec;
  };
};

export default WorkflowSpec;
