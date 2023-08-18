import { z } from "https://deno.land/x/zod@v3.22.1/mod.ts";

import { EventSpecSchema } from "./event.ts";
import { JobSpecSchema } from "./job_spec.ts";

export const WorkflowSpecSchema = z.object({
  name: z.string(),
  on: EventSpecSchema,
  env: z.record(z.string()).optional(),
  jobs: z.record(JobSpecSchema),
});

type WorkflowSpec = z.infer<typeof WorkflowSpecSchema>;

export default WorkflowSpec;
