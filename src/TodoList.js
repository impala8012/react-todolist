import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

function TodoList({ todos, removeTodo, toggleTodo, editTodo, filter }) {
  return (
    <div>
      {todos
        .filter((todo) => {
          if (filter === "all") return todo;
          return filter === "completed" ? todo.completed : !todo.completed;
        })
        .map((todo) => (
          <Todo
            id={todo.id}
            filter={filter}
            task={todo.task}
            key={todo.id}
            completed={todo.completed}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        ))}
    </div>
  );
}

export default TodoList;
