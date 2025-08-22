import React, { Fragment, useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { todoContext } from '../Wrapper';

const Read = () => {

  const [todos, settodos] = useContext(todoContext);
  console.log([todos, settodos]);


  const deleteHandler = (id) => {
    const filterTodo = todos.filter((todo) => todo.id != id);
    settodos(filterTodo);
    toast.error("Todo Deleted Successfully")
  }

  const rendertodos = todos.map((todos) => {
    return <li className='flex gap-2 justify-between items-center p-3 mb-2 rounded bg-gray-800' key={todos.id}><span className='text-xl font-thin'>Tittle: {todos.Tittle}</span><button className='font-thin text-red-400 text-sm ' onClick={() => deleteHandler(todos.id)}>Delete</button>
    </li>
  })


  return (
    <div className='w-[40%] p-10'>
      <hr />
      <h1 className='mb-10 text-5xl font-thin'><span className='text-fuchsia-200'>pending</span> Todos</h1>
      <ol>{rendertodos}</ol>
    </div>
  )
}

export default Read
