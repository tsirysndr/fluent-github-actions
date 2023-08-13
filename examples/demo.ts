import { Workflow, JobSpec } from "../mod.ts";

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
