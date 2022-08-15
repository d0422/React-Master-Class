import React, { useState } from "react";
import { useForm } from "react-hook-form";
// const Todolist = () => {
//   const [value, setValue] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setValue(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(value);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={value} placeholder="Wirte a todo" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// };
function Todolist() {
  const { register, watch, handleSubmit, formState } = useForm();

  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...(register("todo"),
          {
            required: true,
            minLength: 5,
          })}
          placeholder="Write a todo"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Todolist;
