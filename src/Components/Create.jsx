import React, { Fragment, useContext, useState } from 'react'
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { todoContext } from '../Wrapper';


const Create = () => {

     const [todos, settodos] = useContext(todoContext);
   const {register, handleSubmit, reset, formState: {errors},} = useForm();
    
    const [isCompleted, setisCompleted] = useState(false)
    
    const submitHandler = (data) => {
        data.isCompleted = false;
        data.id = nanoid();
        console.log(data);

        const copyTodos = [...todos];
        copyTodos.push(data);
        settodos(copyTodos);
        toast.success("Todo created!")
        reset();
        
        
    };
    console.log(errors);

    
    return (
        <div className='w-[60%] p-10'>
            <h1 className='mb-10 text-5xl font-thin'>Create <span className='text-red-400'>Your</span> Tasks</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <input 

                {...register("Tittle", {required: "Tittle can not be empty"})}
                className='border-b w-full text-2xl font-thin p-2 outline-0'
               
                    type="text" placeholder='Tittle' />

                    {<small className='text-red-900 text-2xl'>{errors?.Tittle?.message}</small>} 
                <br /> <br />
                <input 
                
                onChange={(e) => {
                    setisCompleted(e.target.checked)
                }}
                    value={isCompleted}
                    type="checkbox" /> completed
                <br /> <br />
                <button className='text-xl mt-3 px-10 py-2 border rounded'>Create Todo</button>
            </form>
        </div>
    )
}

export default Create
