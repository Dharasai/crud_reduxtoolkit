


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETELIST, EDITLIST } from '../Reducers/Reducer';



const TodoItems = () => {

  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [ isEditing, setEditing ] = useState(false);
  const [ state, setState ] = useState({
   id: '', content: ''
  });


  const onEditHandler = ( id, content) => {
   setEditing(true);
   setState({ ...state, id, content});
  }
  const handleChange = (e) =>{
   setState({...state, [e.target.name]: e.target.value,  
     });
  }
  const { content, id } = state;
  const edit = () =>{
   if(content === ''){
    setState(...state);
    return;
   }
   dispatch((EDITLIST({content, id})));
   setEditing(false);
  }
return <div>
 {
   isEditing ?
    <div className='form'>
        <h3>Edit</h3>
      <input type='text' value={content} name='content' 
         onChange={handleChange}>
      </input>
      <button type='button' className='button' 
        onClick={edit}>Edit
     </button>
   </div> :
   <ul className='todos'>
    {
      todoList.map(({id, content})=> {
        return <li className='grid' key={id}>
          <span className='content'>{content}</span>
          <span className='todo'>  
            <button className="close_btn" 
              onClick={() => dispatch(DELETELIST({id}))}> Delete</button>
            <button className="edit_btn" 
              onClick={() =>onEditHandler(id, content)} >Edit</button>
          </span>
       </li>
     })
    }
  </ul>
  }
</div>;
};
export default TodoItems;