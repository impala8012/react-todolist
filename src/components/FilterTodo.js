import React from "react";
import styled from "styled-components";

const Filter = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 0 10px 10px 10px;
    border-radius: 5px;
    font-size: 18px;
    outline: none;
  }
`;
function FilterTodo({
  showAllTodo,
  showCompletedTodo,
  showIncompletedTodo,
  clearAll,
}) {
  return (
    <div>
      <Filter>
        <button onClick={showAllTodo}>ALL</button>
        <button onClick={showCompletedTodo}>COMPLETED</button>
        <button onClick={showIncompletedTodo}>INCOMPLETED</button>
        <button onClick={clearAll}>DELETE ALL</button>
      </Filter>
    </div>
  );
}

export default FilterTodo;
