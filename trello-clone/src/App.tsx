import React from "react";
import { Draggable, DragDropContext, Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";
const Ul = styled.ul`
  font-size: 30px;
`;
function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="one">
        {(magic) => (
          <Ul ref={magic.innerRef} {...magic.droppableProps}>
            <Draggable draggableId="first" index={0}>
              {(magic) => (
                <li
                  ref={magic.innerRef}
                  {...magic.draggableProps}
                  {...magic.dragHandleProps}
                >
                  One
                </li>
              )}
            </Draggable>
          </Ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
