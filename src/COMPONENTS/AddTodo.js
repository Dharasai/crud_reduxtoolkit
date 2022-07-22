


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADDLIST } from '../Reducers/Reducer';




const AddTodo = () => {
  const dispatch = useDispatch();
  const [ state, setState ] = useState({
     content: '',
  });
  const inputHandleChange = (e) =>{
    setState({...state, 
          [e.target.name]: e.target.value,
         })
  }
  const Add = () =>{
    if(content === ''){
      setState(...state);
       return;
    }
    dispatch(ADDLIST({name: content}));
    setState({...state, content: ''});
  }
  const { content} = state;
   return(
     <>
     <div className='form'>
      <h2>Todo List</h2>
      <input type='text' value={content} 
        name='content' 
        onChange={inputHandleChange}>
      </input>
      <button type='button' className='button' 
        onClick={Add}>Add
      </button>
    </div>
     </>
   ) 
    
};
export default AddTodo








