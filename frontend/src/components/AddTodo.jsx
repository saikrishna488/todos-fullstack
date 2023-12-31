import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import axios from 'axios';

const AddTodo = () => {

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = async (e) => {
    e.preventDefault();
    if (input != "") {
      try{
        let add = await axios.post("http://20.193.159.30/todo",{
          text : input
        });
        if(add.data.todo){
          dispatch(addTodo(add.data.todo));
          setInput("");
        }
      }
      catch(e){
        console.log(e);
      }
    }

  }
  return (
    <form className='todo-box' onSubmit={addTodoHandler}>
      <input type="text" placeholder='Enter todo' onChange={e => setInput(e.target.value)}
        value={input} />

      <button>Add</button>
    </form>
  )
}

export default AddTodo
