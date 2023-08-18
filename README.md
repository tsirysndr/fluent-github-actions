# Fluent Github Actions

[![deno module](https://shield.deno.dev/x/fluent_github_actions)](https://deno.land/x/fluent_github_actions)
![deno compatibility](https://shield.deno.dev/deno/^1.34)
[![](https://img.shields.io/codecov/c/gh/tsirysndr/fluent-github-actions)](https://codecov.io/gh/tsirysndr/fluent-github-actions)

Fluent Github Actions is a deno module for generating Github Actions Workflow configuration files easily and fluently.

## 🚀 Usage

```typescript
import {
  Workflow,
  JobSpec,
} from "https://deno.land/x/fluent_github_actions@v0.2.0/mod.ts";

const workflow = new Workflow("Codecov");

const push = {
  branches: ["master"],
};

const test: JobSpec = {
  "runs-on": "ubuntu-latest",
  steps: [
    {
      uses: "actions/checkout@v2",
    },
    {
      uses: "denolib/setup-deno@v2",
      with: {
        "deno-version": "v1.34",
      },
    },
    {
      name: "Create coverage files",
      run: "deno test --coverage=coverage",
    },
    {
      name: "Create coverage report",
      run: "deno coverage ./coverage --lcov > coverage.lcov",
    },
    {
      name: "Collect coverage",
      uses: "codecov/codecov-action@v3",
      env: {
        CODECOV_TOKEN: "${{ secrets.CODECOV_TOKEN }}",
      },
      with: {
        file: "./coverage.lcov",
      },
    },
  ],
};

workflow.on({ push }).jobs({ test });

console.log(workflow.toString());

workflow.save("./.github/workflows/codecov.yml");

```