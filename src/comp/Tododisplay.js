import React, { Fragment } from 'react'
import Wrapper from './Wrapper'
import displays  from '../styles/Tododisplay.module.css'
import {ImCross } from "react-icons/im";
function Tododisplay(props) {

  // let todoreturn;
  // if (props.todolist.length === 0) {
  //   return <p>No todos found!</p>;
  // } 


  return (
    <>


  
    {/* <h1>todo</h1> */}
    <div className={displays.divs}>
    {/* <div class={displays.task}>
  <span class={displays.taskcontent}>Index  Task  End Date  Cancle</span>
</div> */}
<div className={displays.task}>
  <span className={displays.taskcontents}>Num</span>
  <span className={displays.taskcontentss}>task</span>
  <span className={displays.taskdates}>End Date</span>
  <span className={displays.taskicons}>Delete</span><br></br><br></br><br></br>
</div>

  
    <Fragment >
      {props.todolist.map((item) => (
      
        
     <div style={{display: 'flex', flexDirection: 'row'}} key={item.id} > 
      
     
      {/* <div className={display.divs}>   {item.todo}  | {item.date}    | {<FcPlus />}</div> </div>  */}
      {/* <div className={displays.divs}> */}
   {/* <span>{item.todo}</span> <span >{item.date}</span> {<ImCross />} */}

  
  <div class={displays.task}>
  <span class={displays.taskcontent}>{item.id}</span>
  <span class={displays.taskcontent}>{item.todo}</span>
  <span class={displays.taskdate}>{item.date}</span>
  <button class={displays.taskicon}  onClick={() => props.deleteTodo(item.id)}>Delete</button><br></br><br></br><br></br>
 
  
</div>



</div>

     ))}</Fragment></div></>
  )
}

export default Tododisplay