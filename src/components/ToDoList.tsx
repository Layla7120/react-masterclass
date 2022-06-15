import { useRecoilState, useRecoilValue } from "recoil";
import { H1, H2, ToDoListDiv, UlBox, Select } from "../App";
import { categoriesList, categoryState, IToDo, toDoSelector } from "./atoms";
import { CreateCategory } from "./CreateCategory";
import { CreateToDo } from "./CreateToDo";
import { ToDo } from "./ToDo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const categories = useRecoilValue(categoriesList);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as unknown as string);
  };
  return (
    <>
      <H1>To Dos</H1>
      <ToDoListDiv>
        <H2>Add category</H2>
        <CreateCategory />

        <Select value={category} onInput={onInput}>
          {categories.map(category => (
            <option value={category}>{category}</option>
          ))}
        </Select>

        <CreateToDo />
        <UlBox>
          {toDos?.map((toDo: JSX.IntrinsicAttributes & IToDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </UlBox>
      </ToDoListDiv>
    </>
  );
};
export default ToDoList;
