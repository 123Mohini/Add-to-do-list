import React,{useState} from 'react'
import Todoform from './Todoform'

export default function Todowrapper() {
  const [todos,setTodos]=([])
  const addTod=todo=>{
    setTodos([...todos,])
  }
  return (
        <Todoform addTodo={addTodo}/>
  )
}
