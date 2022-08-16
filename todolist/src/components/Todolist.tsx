import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import Todo from "./ToDo";

const Todolist = () => {
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo></CreateToDo>
      <ul>
        {toDos.map((toDo) => (
          <Todo {...toDo} />
        ))}
      </ul>
    </div>
  );
};
// function Todolist() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IFormData>({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   });
//   type IFormData = {
//     errors: {
//       email: {
//         message: string;
//       };
//       password: {
//         message: string;
//       };
//       chkpassword: {
//         message: string;
//       };
//     };
//     email: string;
//     password: string;
//     chkpassword: string;
//   };
//   const onValid = (data: IFormData) => {
//     if (data.chkpassword !== data.password) {
//       setError(
//         "chkpassword",
//         { message: "비밀번호가 다릅니다!" },
//         { shouldFocus: true }
//       );
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit(onValid)}>
//         <input
//           {...register("email", {
//             required: true,
//             validate: (value) =>
//               value.includes("rlfehd") ? "rlfehd을 포함할 수 없습니다." : true,
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "잘못된 email입니다.",
//             },
//           })}
//           placeholder="Email"
//         />
//         <span>{errors?.email?.message}</span>
//         <input
//           {...register("password", {
//             required: true,
//             minLength: {
//               value: 8,
//               message: "8글자 이상의 password 필요!",
//             },
//           })}
//           placeholder="password"
//         />
//         <span>{errors?.password?.message}</span>
//         <input
//           {...register("chkpassword", {
//             required: true,
//             minLength: {
//               value: 8,
//               message: "8글자 이상의 password 필요!",
//             },
//           })}
//           placeholder="password"
//         />
//         <span>{errors?.chkpassword?.message}</span>
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

export default Todolist;
