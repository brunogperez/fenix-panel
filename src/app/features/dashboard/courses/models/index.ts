import { Subscriber } from "../../subscribers/models";

export interface Course {
  id: string;
  name: string;
  duration: string;
  level: string;
  description: string;
  classes: ClassItem[];
  students?: Subscriber[];
}

export interface ClassItem {
  id: number;
  name: string;
  date: Date;
}
