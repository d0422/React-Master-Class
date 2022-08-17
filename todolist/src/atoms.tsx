import { atom, selector } from "recoil";
export interface IToDo {
  text: string;
  id: number;
  category: "TODO" | "Doing" | "Done";
}
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDOSelector = selector({
  key: "toDOSelector",
  get: ({ get }) => {
    return "hello";
  },
});
