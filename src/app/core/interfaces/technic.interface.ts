export interface ITechnic {
  type: string;
  image: string;
  name: string;
  description?: string;
  supplier: string;
  year: number;
  state: number;
  cost: number;
  additional?: string[]
}
