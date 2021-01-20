import React from "react";
import styled from "styled-components";
import useToggleState from "../hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  margin-top: 15px;
`;

const TodoContent = styled.div`
  width: 50%;
  margin-top: 5px;

  li {
    display: block;
    list-style: none;
    font-size: 24px;
    

    :hover {
      cursor: pointer;
    }
  }
`;

const TodoButtonContainer = styled.div`
  button {
    font-size: 18px;
    outline: none;
    color: red;
    border-radius: 5px;
    margin-left: 10px;
  }
`;

function Todo({ task, completed, id, removeTodo, toggleTodo, editTodo }) {
  // console.log("completed", completed)
  const [isEditing, toggleisEditing] = useToggleState(false);
  return (
    <TodoItem>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggleisEditing}
        />
      ) : (
        <>
          <TodoContent onClick={() => toggleTodo(id)}>
            <li style={{ textDecoration: completed ? "line-through" : "none" }}>
              {task}
            </li>
          </TodoContent>
          <TodoButtonContainer>
            <button onClick={toggleisEditing}>Edit 📝</button>
            <button onClick={() => removeTodo(id)}>Delete 🗑️</button>
          </TodoButtonContainer>
        </>
      )}
    </TodoItem>
  );
}

export default Todo;
