import React from 'react'
import logoguy from './logoguy.jpg'
import './Header.css'



export default function Head(props) {
  return(
    <nav>
    <div className="App">
       <header className="App-header">
         <div style={{position:'relative',top:'165px',zIndex:'1',left:'100px',fontSize:'20px', color:'black'}}> 
         Здравствуйте,
          хорошего дня </div>
         <img src={logoguy} className="App-logo" alt="logoguy" />
       
         
       </header>
       
    
   
  
     </div>
   </nav>
  )
}