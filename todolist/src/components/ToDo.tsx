import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function Todo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: IToDo["category"]) => {
    setToDos((oldToDos) => {
      const targetPosition = oldToDos.findIndex((toDo) => toDo.id === id);
      oldToDos = [
        ...oldToDos.slice(0, targetPosition),
        { text, id, category: newCategory },
        ...oldToDos.slice(targetPosition + 1),
      ];
      console.log(oldToDos);
      return oldToDos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "Doing" && (
        <button
          onClick={() => {
            onClick("Doing");
          }}
        >
          Doing
        </button>
      )}
      {category !== "TODO" && (
        <button
          onClick={() => {
            onClick("TODO");
          }}
        >
          TODO
        </button>
      )}
      {category !== "Done" && (
        <button
          onClick={() => {
            onClick("Done");
          }}
        >
          Done
        </button>
      )}
    </li>
  );
}
export default Todo;
