import { z } from "../deps.ts";
import { StepSpecSchema } from "./step_spec.ts";

export const JobSpecSchema = z.object({
  "runs-on": z.string(),
  strategy: z
    .object({
      matrix: z.record(z.union([z.array(z.string()), z.record(z.string())])),
    })
    .optional(),
  steps: z.array(StepSpecSchema),
});

export type JobSpec = z.infer<typeof JobSpecSchema>;
