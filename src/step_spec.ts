import { z } from "https://deno.land/x/zod@v3.22.1/mod.ts";

export const StepSpecSchema = z.object({
  name: z.string().optional(),
  uses: z.string().optional(),
  run: z.string().optional(),
  env: z.record(z.string()).optional(),
  with: z.record(z.string()).optional(),
});

export type StepSpec = z.infer<typeof StepSpecSchema>;
