import { z } from "../deps.ts";

export const EventNameSchema = z.enum([
  "branch_protection_rule",
  "check_run",
  "check_suite",
  "create",
  "delete",
  "deployment",
  "deployment_status",
  "discussion",
  "discussion_status",
  "discussion_comment",
  "fork",
  "gollum",
  "issue_comment",
  "issues",
  "label",
  "merge_group",
  "milestone",
  "page_build",
  "project",
  "project_card",
  "project_column",
  "public",
  "pull_request",
  "pull_request_comment",
  "pull_request_review",
  "pull_request_review_comment",
  "pull_request_target",
  "push",
  "registry_package",
  "release",
  "repository_dispatch",
  "schedule",
  "status",
  "watch",
  "workflow_call",
  "workflow_dispatch",
  "workflow_run",
]);

export type EventName = z.infer<typeof EventNameSchema>;

export const EventConfigSchema = z.object({
  types: z.array(z.string()).optional(),
  branches: z.array(z.string()).optional(),
  "branches-ignore": z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  "tags-ignore": z.array(z.string()).optional(),
  paths: z.array(z.string()).optional(),
  "paths-ignore": z.array(z.string()).optional(),
});

type EventConfig = {
  [event in EventName]?: z.infer<typeof EventConfigSchema>;
};

export const EventSpecSchema = z.union([
  EventNameSchema,
  z.array(EventNameSchema),
  z.record(EventConfigSchema),
]);

export type EventSpec = z.infer<typeof EventSpecSchema> | EventConfig;
