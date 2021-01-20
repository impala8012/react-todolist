import { useState, useRef } from "react";

const useTodoState = (initailTodos) => {
  const [todos, setTodos] = useState(initailTodos);
  const [filter, setFilter] = useState("all");
  const id = useRef(1);
  const addTodo = (newTodoText) => {
    if (newTodoText === "") return;
    // console.log(id);
    // 更新
    setTodos([
      ...todos,
      { id: id.current++, task: newTodoText, completed: false },
    ]);
  };

  // 刪除
  const removeTodo = (todoId) => {
    // 把要移除的todo filter out
    const updatedTodo = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodo);
  };

  const toggleTodo = (todoId) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodo);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodo);
  };

  const showAllTodo = () => setFilter("all");
  const showCompletedTodo = () => setFilter("completed");
  const showIncompletedTodo = () => setFilter("incompleted");
  const clearAll = () => setTodos([]);

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo,
    filter,
    showAllTodo,
    showCompletedTodo,
    showIncompletedTodo,
    clearAll,
  };
};

export default useTodoState;
