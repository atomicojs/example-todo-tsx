export interface Task {
  id: number;
  value: string;
  checked: boolean;
}

export type View = "all" | "active" | "complete";
