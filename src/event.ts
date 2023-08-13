export type EventName =
  | "branch_protection_rule"
  | "check_run"
  | "check_suite"
  | "create"
  | "delete"
  | "deployment"
  | "deployment_status"
  | "discussion"
  | "discussion_status"
  | "discussion_comment"
  | "fork"
  | "gollum"
  | "issue_comment"
  | "issues"
  | "label"
  | "merge_group"
  | "milestone"
  | "page_build"
  | "project"
  | "project_card"
  | "project_column"
  | "public"
  | "pull_request"
  | "pull_request_comment"
  | "pull_request_review"
  | "pull_request_review_comment"
  | "pull_request_target"
  | "push"
  | "registry_package"
  | "release"
  | "repository_dispatch"
  | "schedule"
  | "status"
  | "watch"
  | "workflow_call"
  | "workflow_dispatch"
  | "workflow_run";

type EventConfig = {
  [event in EventName]?: {
    types?: string[];
    branches?: string[];
    "branches-ignore"?: string[];
    tags?: string[];
    "tags-ignore"?: string[];
    paths?: string[];
    "paths-ignore"?: string[];
  };
};

export type EventSpec = EventName | EventName[] | EventConfig;
