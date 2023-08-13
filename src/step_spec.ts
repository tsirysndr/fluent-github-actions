export type StepSpec = {
  name?: string;
  uses?: string;
  run?: string;
  env?: {
    [key: string]: string;
  };
  with?: {
    [key: string]: string;
  };
};
