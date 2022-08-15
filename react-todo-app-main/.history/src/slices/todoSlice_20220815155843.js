import { createSlice } from '@reduxjs/toolkit';
const getinitaialTodo=()=>{
  const localTodoList=window.localStorage.getItem('todoList');
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem('todoList', []);
  return [];

}
const initaialValue={
  todoList:getinitaialTodo(),
}
export const todoSLice=createSlice({
  name:'todo',
  initialState:initaialValue,
  reducers:{
    addTodo:(state,action)=>{
      state.todoList.push(action.payload);
      const todoList=window.localStorage.getItem('todoList');
      if(todoList){
        const todoListArr=JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('todoList',JSON.stringify(todoListArr))
      }
      else{
        window.localStorage.setItem('todoList',JSON.stringify([{
          ..action.pa
        }]));
      }
    }
  }
})