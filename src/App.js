// import React from 'react'
// import './App.css'
// import Todowrapper from'./components/Todowrapper'
// export default function App() {
//   return (
//     <div className='App'>
//         <Todowrapper/>
//     </div>
//   )
// }

import React, { useState } from 'react'
import Tododisplay from './comp/Tododisplay';
import Todoform from './comp/Todoform';
import Form from './comp/Form';
import Apps from './styles/App.module.css';

const initialtodolist = [{id: 1, todo: "Learn React",date:'2023-09-01'},
{id: 2, todo: "Learn Java",date:'2023-05-01'}];

// const initialdatelist = [{id: 1, tododate: "30-aug"},
// {id: 2, tododate: "1-sep"}];

export default function App() {
  const [inputlist,setInputlist]=useState([]);
  // const [inputdatelist,setInputdatelist]=useState(initialdatelist);
  const [items,setItems]=useState([]);
  const [bgcolor,setBgcolor]=useState("red");
  const [show,setShow]=useState(false);
  const [s,setS]=useState(false);
  
  // const itemEvent=(event)=>{
  //   setInputlist(event.target.value);
  // }

  // const listofitems=(e)=>{
  //   e.preventDefault();
  //   setBgcolor("green");
  //   setItems((oldItems)=>{
  //     return [...oldItems,inputlist];
  //   })

  // }

  const addTodos = (todoval,datevalue) => {
    console.log(todoval,datevalue);
    

    let todoid = inputlist.length + 1;
    
    setInputlist((prevList) => {
      return [...prevList, {id: todoid, todo: todoval,date:datevalue}]
    });


    setShow(false);
    // setInputlist([{id: 3, todo: todoitem}]);
    // setTasks(false);

   
    // setS(false);

  }
  //  const as=()=>{
  //   setS(false);
    
  //  }

  const deleteTodos = (id) => {
    setInputlist((prevList) => {  
      return prevList.filter((i) => i.id !== id)
    })

  }

  const showHandle=()=>{
    // style={ visibility: 'hidden'};
   
    setShow(true);
    setS(true);
    
  }

  
  

  // const hidehandle=()=>{
  //   setShow(false);
  // }

  return (
    // <div  style={{backgroundColor:'lightgray'}}>
                <div className={Apps.backgrounds}>
                <div style={{textAlign:'center'}}><br></br>
                  <h1 style={{fontSize:'100px',fontFamily:"serif"}}>ToDo List</h1><br></br>
                  
                  <button className={Apps.shows} onClick={showHandle}     style={{ visibility:  show ? 'hidden' : 'visible' }} >Add Task</button>
                  {/* <button className={Apps.hides} onClick={hidehandle}>Hide</button><br></br><br></br> */}
                  {/* <form onSubmit={listofitems}>
                  <input type="text" placeholder='Add Items' onChange={itemEvent}/>   <button style={{backgroundColor:bgcolor }}type="submit">Add</button>
                  
                  </form> */}
                  {show && <Todoform addTodo={addTodos} />}
                  {(show || s) && <Tododisplay todolist={inputlist} deleteTodo={deleteTodos}/>}
                  </div>
                  </div>
                // </div>
                // style={{ display: show ? 'none' : 'block' }}
    
  )
}
