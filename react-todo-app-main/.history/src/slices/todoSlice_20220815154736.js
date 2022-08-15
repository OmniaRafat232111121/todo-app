import { createSlice } from '@reduxjs/toolkit';
const getinitaialTodo=()=>{
  const localTodoList=window.localStorage.getItem('to')
}
const initaialValue={
  todoList:getinitaialTodo();
}