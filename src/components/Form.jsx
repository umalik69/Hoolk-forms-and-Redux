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
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <select {...register("Name")} className="select">
        <option value="Hussain">Hussain</option>
        <option value="Usama">Usama</option>
        <option value="Ahmad">Ahmad</option>
      </select>

    {errors.Name?.type === 'required' && <p role="alert">First name is required</p>}
      <input type="submit" className='submit' />
    </form>
    <div>
        {
        list.map((elem)=>{
            return(
            <div key={elem.id}>
    <h3>{elem.data.Name} < AiFillCloseCircle onClick={()=>dispatch(DLT(elem.id))}/></h3>
    </div>
         ) })
}
    </div>
    </div>
  );
  
}