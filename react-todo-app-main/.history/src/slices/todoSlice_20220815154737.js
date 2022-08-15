import { createSlice } from '@reduxjs/toolkit';
const getinitaialTodo=()=>{
  const localTodoList=window.localStorage.getItem('tod')
}
const initaialValue={
  todoList:getinitaialTodo();
}