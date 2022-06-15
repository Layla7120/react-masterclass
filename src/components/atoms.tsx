import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "todoLocal",
  storage: localStorage,
});

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const categoriesList = atom<string[]>({
  key: "categories",
  default: ["TO_DO"],
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom<string>({
  key: "category",
  default: "TO_DO",
});

export const toDoState = atom({
  key: "todos",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    const categories = get(categoriesList);
    console.log(toDos, category, categories);
    return toDos.filter(
      (toDo: { category: string }) =>
        categories.includes(toDo.category) && category === toDo.category
    );
  },
});
