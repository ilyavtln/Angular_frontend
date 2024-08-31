export interface ISpare {
  type: string;
  image: string;
  name: string;
  description?: string;
  supplier: string;
  compatibility: string[];
  state: number;
  year: number;
  cost: number;
}
