import React, { useState } from "react";
import Circle from "./Circle";
function App() {
  const [value,setValue]=useState<number|string>("");
  const onChange=(event: React.FormEvent<HTMLInputElement>)=>
  {
    const{
      currentTarget:{value},
    }=event;
    setValue(value);
  };
  const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    // 새로고침 방지
    console.log("hello",value);
  };
  return (<div>
    <Circle bgColor={"coral"} borderColor="white"></Circle>
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange}value={value}placeholder="usename"></input>
      <button>log in</button>
    </form>
  </div>
  );
}
export default App;
