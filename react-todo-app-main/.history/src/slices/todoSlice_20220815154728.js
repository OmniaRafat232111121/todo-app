import { createSlice } from '@reduxjs/toolkit';
const getinitaialTodo=()=>{
  const localTodoList=window.localStorage.getItem()
}
const initaialValue={
  todoList:getinitaialTodo();
}