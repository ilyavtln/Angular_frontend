import {IAnchor} from "./anchor.interface";
import {IChip} from "./chip.interface";

export interface IHeroBanner {
  title: string;
  description: string;
  image: string;
  anchors?: IAnchor[];
  chip?: IChip;
  state?: number;
  year?: number;
  cost?: number;
}
