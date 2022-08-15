import { createSlice } from '@reduxjs/toolkit';
const getinitaialTodo=()=>{
  const localTodoList=window.localStorage.getItem('todoLis')
}
const initaialValue={
  todoList:getinitaialTodo();
}