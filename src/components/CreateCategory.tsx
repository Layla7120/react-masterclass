import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { Button, Input, UlBox } from "../App";
import { categoriesList } from "./atoms";

export const CreateCategory = () => {
  const [categories, setCategories] = useRecoilState(categoriesList);
  const { register, handleSubmit, setValue } = useForm();
  const handleValid = ({ category: newCategory }: any) => {
    setCategories(oldCategory => [newCategory, ...oldCategory]);
    setValue("category", "");
  };
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCategories((oldCategories: any[]) => {
      const targetIndex = oldCategories.findIndex(
        category => category === event.currentTarget.value
      );
      return [
        ...oldCategories.slice(0, targetIndex),
        ...oldCategories.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <Input
          {...register("category", {
            required: "Please write a category",
          })}
          placeholder="Write a category"
        />
        <Button>Add</Button>
        <UlBox>
          <ul>
            {categories.map(category => (
              <>
                <li value={category}>
                  {category}
                  <Button value={category} onClick={onClick}>
                    Delete
                  </Button>
                </li>
              </>
            ))}
          </ul>
        </UlBox>
      </form>
    </div>
  );
};
