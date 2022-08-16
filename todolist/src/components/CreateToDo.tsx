import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}
function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { handleSubmit, register, setValue } = useForm<IForm>();
  const onsubmit = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "Doing" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <input
        {...register("toDo", {
          required: "todo 를 적어주세요",
        })}
        placeholder="Wirte a todo"
      />
      <button>Add</button>
    </form>
  );
}
export default CreateToDo;
