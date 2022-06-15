import { useSetRecoilState } from "recoil";
import { Button } from "../App";
import { IToDo, toDoState } from "./atoms";

export const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos: any[]) => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      <Button onClick={onClick}>Delete</Button>
    </li>
  );
};
