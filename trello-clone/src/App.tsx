import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";
import { Draggable, DragDropContext, Droppable } from "@hello-pangea/dnd";
function App() {
  const [minute, setMinute] = useRecoilState(minuteState);
  const [hour, setHour] = useRecoilState(hourSelector);
  const 분바꾸기 = (event: React.FormEvent<HTMLInputElement>) => {
    setMinute(+event.currentTarget.value);
  };
  const 시간바꾸기 = (event: React.FormEvent<HTMLInputElement>) => {
    setHour(+event.currentTarget.value);
  };

  return (
    <>
      <input
        type="number"
        value={minute}
        onChange={분바꾸기}
        placeholder="Minutes"
      ></input>
      <input
        type="number"
        placeholder="Time"
        value={hour}
        onChange={시간바꾸기}
      ></input>
    </>
  );
}

export default App;
