'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import trash from '../../public/assets/trash.png'
import NoTodo from "./NoTodo";

function TodoList() {
  const [task,setTask] = useState()
  useEffect(()=>{
   if (localStorage.getItem('todos')) {
    setTask(JSON.parse(localStorage.getItem('todos')))
   }
  },[localStorage.getItem('todos')])
  const deleteTask = (index) =>{
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos.length > 1) {
      todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(todos))
    setTask([...todos])
    }else{
      localStorage.removeItem('todos')
      setTask([])
    }
  }
  return (
    <>
    {localStorage.getItem('todos')?<div className="flex flex-col items-center justify-center w-full px-5 py-5 m-auto my-5 md:w-3/5">
      {task?.map((task,index)=>(
        <div
        id={index}
        className="flex items-center justify-between w-full gap-10 px-6 py-5 mb-5"
        style={{
          border: "1px solid #808080",
          backgroundColor: "#333333",
          borderRadius: "10px",
        }}
      >
        <input class type="checkbox" className="w-5 h-5 cek" />
        <p className="bg-transparent" style={{ fontSize:'17px', fontWeight:'600', color:'#F2F2F2' }}>{task.act}</p>
        <Image
      lazyRoot="lazy"
      className="bg-transparent"
      src={trash}
      style={{ width:'28px',height:'28px',cursor:'pointer' }}
      alt="Picture of the author"
      onClick={()=>{deleteTask(index)}}
    />
      </div>
      ))}
      
      
    </div>:<NoTodo/>}
    </>
  );
}

export default TodoList;
