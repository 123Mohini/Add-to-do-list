import React,{useState, Fragment, useRef} from 'react'
import Todofor from '../styles/Todoform.module.css';
import {FcPlus } from "react-icons/fc";
import { ReactDOM } from 'react';
import { createPortal } from 'react-dom';
export default function Todoform(props) {
    const todoref = useRef();
    const [todovalue, setTodovalue] = useState("")
    const [button,setButton]=useState(true);
    const [datevalue, setDatevalue] = useState("")
    const [taskinvalid,setTaskinvalid]=useState(false)
    const [dateinvalid,setDateinvalid]=useState(false)
    const [fields,setFields]=useState(false)

    const todoChangeHandler = (e) => {
      setTodovalue(e.target.value);
      console.log(todoref.current.value);
      let item=e.target.value;
      if(item.length<=0 ){
        <p style={{color:'red'}}>Enter Valid Task</p>
      }}

    const dateHandler=(e)=>{
      
      setDatevalue(e.target.value);

      
    }

    const blurtaskHandler=()=>{
      
      if(todovalue.length<=0){
        setTaskinvalid(true)
      }else{
        setTaskinvalid(false)
      }

    }  
    

    const blurdateHandler=()=>{
      
      if(datevalue.length<=0){
        
        setDateinvalid(true)
      }else{
        setDateinvalid(false)
      }

      // 
    }
    

    const handleSubmit=(e)=>{
      
      e.preventDefault();
      
      if(todovalue === '' || datevalue === '') {
        console.log('Inputs are empty!');
        // setFields(true);
        return
      }
      
      // console.log(value);
      props.addTodo(todovalue,datevalue)
     
      
    }

    

    
  
    

  return createPortal(
    <Fragment>
    <div className={Todofor.modalf}></div>
    {/* <div className= {Todofor.divs}></div> */}
    <div className={Todofor.container}>
      <form className="Todoform" onSubmit={handleSubmit} >
        <input ref={todoref} className={Todofor.header} type="text" placeholder="Enter Task" pattern="[A-Z a-z]+"  onBlur={blurtaskHandler} onChange={todoChangeHandler}/><br></br>
        {taskinvalid ? <p style={{color:'red'}}>Task is required</p> :null}
        <input className={Todofor.header} type="date" placeholder="Select Date" min="2023-08-23" onChange={dateHandler} onBlur={blurdateHandler}/><br></br>
        {dateinvalid ? <p style={{color:'red'}}>Date is required</p> :null}<br></br>
        <button className={Todofor.shows} type="submit" > Submit </button>
        {/* <button  type="submit"><FcPlus /></button> */}
        
          

        
        {/* {fields ? <p style={{color:'red'}}>Task and Date required</p> :null} */}
        </form>
        
    </div>
    
    </Fragment>,
    document.getElementById('portal1')
  )
  }
