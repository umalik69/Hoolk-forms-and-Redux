import React from 'react';
import {useState}from 'react';
import { useForm } from "react-hook-form";
import { useSelector , useDispatch } from 'react-redux';
import { ADD, DLT } from '../Actions/Index';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Form() {
    const{input, setInput}=useState('')
    const list=useSelector((state)=>state.reducers.list);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch=useDispatch();
  const onSubmit = (data) =>{
     console.log(data);
     dispatch(ADD(data))
    data=0
    }
   
  return (
    <div >
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='form'>
    <input 
    className='select'
        {...register("Name", { required: true })} 
        aria-invalid={errors.Name ? "true" : "false"} 
      />
      {errors.Name?.type === 'required' && <p role="alert">First name is required</p>}

      
    <select    {...register("mail", { required: "Email Address is required" })} 
        aria-invalid={errors.mail ? "true" : "false"}  className="select">
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>
      <select {...register("Gender")} className="select">
        <option value="Female">Female</option>
        <option value="Male">Male</option>

      </select>

    {errors.Name?.type === 'required' && <p role="alert">First name is required</p>}
      <input type="submit" className='submit' />
      </div>
    </form>
    <div className='maintable'>
        {
        list.map((elem)=>{
            return(
            <div key={elem.id} className="table">
    <h3>{elem.data.Name} </h3>
    <h3>{elem.data.mail} </h3>
    <h3>{elem.data.Gender} </h3>

    <button onClick={()=>dispatch(DLT(elem.id))}>Delete</button>
    </div>
         ) })
}
    </div>
    </div>
  );
  
}