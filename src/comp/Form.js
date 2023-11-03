// import React, { useState } from 'react'
// import style from '../styles/Form.module.css'
// export default function Form(props) {
//     const [inputval,setInputval]=useState("");
//     const handleChange=(e)=>{
//         e.preventDefault();
//         setInputval(e.target.value);
//     }

//     const handlenameBlur=(e)=>{
//         let item=e.target.value;
//         if(item.length<4){
//             alert("hi");
//         }

//     }
//     const handleageBlur=(e)=>{
//         let item1=e.target.value;
//         if(item1<=5){
//             alert("Please enter valid age");
//         }
//     }

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         document.write(e.target.value);
//     }

    

//   return (
   
   

//     <div className={style.header}>
//         <form onSubmit= {handleSubmit}>
//             <div className={style.box}>
//             <input className={style.div} type="text" placeholder='Enter Name' onChange={handleChange} onBlur={handlenameBlur}/><br></br>
//             <input className={style.div} type="number" placeholder='Enter Age'onChange={handleChange} onBlur={handleageBlur}/>
//             <input className={style.div} type="date" placeholder='Enter Date'onChange={handleChange} /><br></br><br></br>
//             <button className={style.submitbutton}>Submit</button>
//             </div>
//         </form>
//     </div>
//   )
// }
