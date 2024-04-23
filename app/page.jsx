'use client'
import Image from "next/image";
import TodoCompo from "./components/TodoCompo";
import rocket from '../public/assets/rocket.png'
import { useState } from "react";

export default function Home() {
  const [task,setTask] = useState('')
  const submit = (e) =>{
    e.preventDefault()
    const data = {
      "act" : task,
      "status" : false
    }
    let todos = JSON.parse(localStorage.getItem("todos")); // Mendapatkan daftar to-do dari localStorage
    if (!todos) {
      // Jika tidak ada daftar to-do, membuat array kosong
      todos = [];
    }
    todos.push(data); // Menambahkan to-do baru ke daftar
    localStorage.setItem("todos", JSON.stringify(todos)); // Menyimpan daftar to-do yang diperbarui kembali ke localStorage
    setTask(""); // Mereset nilai input setelah formulir disubmit
  }
  return (
  <div>
    <div className="relative mb-36 sm:mb-20 first-section">
      <div className="flex items-center justify-center gap-2 bg-transparent">
      <Image
      lazyRoot="lazy"
      className="bg-transparent"
      src={rocket}
      style={{ width:'38px',height:'58px' }}
      alt="Picture of the author"
    />
      <h1 className="py-10 bg-transparent w-fit " style={{ color:'#4EA8DE',fontSize:'45px',fontWeight:'700', letterSpacing:'2px' }}>TODO <span className="bg-transparent" style={{ color:'#5E60CE' }}>LIST</span></h1>
      </div>
      <div className="flex justify-center bg-transparent" >
        <form onSubmit={submit}  className="absolute flex flex-wrap justify-center w-full gap-3 bg-transparent top-44">
        <input type="text" id="text" value={task} onChange={(e)=>{setTask(e.target.value)}} className="bg-gray-50 borde text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Belanja Sayur" required />
        <button type="submit" className="btn focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
        </form>
      </div>
      
    </div>
    <TodoCompo/>
  </div>
  );
}
