import { createSlice } from '@reduxjs/toolkit';
const getinitaialTodo=()=>{
  const localTodoList=window.localStorage.getItem('todoList')
}
const initaialValue={
  todoList:getinitaialTodo();
}