import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button, Input } from "../App";
import { categoryState, toDoState } from "./atoms";

interface IForm {
  toDo: string;
}

export const CreateToDo = () => {
  const category = useRecoilValue(categoryState);
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos: any) => [
      { text: toDo, id: Date.now(), category: category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <Input
        {...register("toDo", {
          required: "Please write a to do",
        })}
        placeholder="Write a to do"
      />
      <Button>Add</Button>
    </form>
  );
};
