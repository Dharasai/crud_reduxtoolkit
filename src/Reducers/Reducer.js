
import { createSlice } from '@reduxjs/toolkit'
export const Reducer = createSlice({
 name: 'toDo',
 initialState: {
   todoList:   [
     { id: 1, content: "HELLO WORLD" },
     { id: 2, content: "JHON"}
   ]
 },
 reducers: {
    ADDLIST: (state, action) => {
     let newTodoList = {
       id: Math.random(),
       content: action.payload.name
     }
     state.todoList.push(newTodoList);
   },
   DELETELIST: (state, action) => {
     let { todoList } = state;
     state.todoList = todoList.filter((item) => 
         item.id !==action.payload.id);
   },
   EDITLIST: (state, action) => {
     let { todoList } = state;
     state.todoList = todoList.map((item) => 
       item.id === action.payload.id ? action.payload : item);
   }
  },
})
export const { ADDLIST, DELETELIST, EDITLIST } = Reducer.actions
export default Reducer.reducer;





















