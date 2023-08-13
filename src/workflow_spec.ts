import { EventSpec } from "./event.ts";
import { JobSpec } from "./job_spec.ts";

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
