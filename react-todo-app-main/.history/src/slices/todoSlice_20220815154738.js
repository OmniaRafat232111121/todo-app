import { createSlice } from '@reduxjs/toolkit';
const getinitaialTodo=()=>{
  const localTodoList=window.localStorage.getItem('todo')
}
const initaialValue={
  todoList:getinitaialTodo();
}