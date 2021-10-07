import React, {useState} from 'react';
/* import flow from './flow.png'
 */
import './flow.css'
import Speech from 'react-speech';


export default function Flow(props)  {
  const [errorWr,setError] = useState(false);
  const [someWr] = useState('Something Wrong!')
  const play1 = () => {document.getElementsByClassName('rs-play')[0].click();}
 /*  function Def() {
  const El1 = () => {document.getElementsById('draggable-3');}
  const El2 = document.getElementsByClassName('dragzone');
  El1.appendChild(El2);
  console.log(El1)} */
  console.log(play1)

  function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
      
  }
  function onDragOver(event) {
    event.preventDefault();
  }
  function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');
      const draggableElement = document.getElementById(id);
      const dropzone = event.target;
      
      dropzone.appendChild(draggableElement);
      event
    .dataTransfer
    .clearData();
    
  }
  
  const checkTranslate = (id) => {
    let parent = document.querySelector('#dropzone');
      let child = document.querySelector('#draggable-3');
      let child1 = document.querySelector('#draggable-6');
      let child2 = document.querySelector('#draggable-7');
      let child3 = document.querySelector('#draggable-9');
      let contains = parent.contains(child);
      let contains1 = parent.contains(child1);
      let contains2 = parent.contains(child2);
      let contains3 = parent.contains(child3);
      console.log(contains, contains1, contains2, contains3);
     if (contains === true && contains1 === true && contains2 === true && contains3 === true)
    {play1()
     console.log('checked');
    }
     else {
      {setError(true)}
      /* Def(); */
     }  
  }
  
return(
    <div className="Fpp">
      

    <label className="dropz"  ><br/>
      <div className="dropzone" id='dropzone' type="text" style={{display:'flex', alignItems:'left',}}
       onDragOver={onDragOver} onDrop={onDrop} > </div>
      <div className="dropzone1" > </div>
      </label>
      <div className='dragzone' onDragOver={onDragOver} onDrop={onDrop}>
       
        <div id="draggable-2" className='word' /* style={{boxSizing: 'border-box', width: '5%',borderRadius: '20px', border: '1px solid black',borderColor: 'gray', height:'24px', textAlign:'center',fontSize:'16px', letterSpacing:'1px', fontWeight:'10px', padding:'1px'}} */ 
        draggable="true" onDragStart={onDragStart}   >
    Else
  </div>
  <div id="draggable-3" className='word' draggable="true" onDragStart={onDragStart}   >
    Good
  </div>
  
  <div id="draggable-5" className='word' draggable="true" onDragStart={onDragStart}   >
    fine
  </div>
  <div id="draggable-6" className='word' draggable="true" onDragStart={onDragStart}   >
    have a
  </div>
  <div id="draggable-7" className='word' draggable="true" onDragStart={onDragStart}   >
    day
  </div>
  <div id="draggable-8" className='word' draggable="true" onDragStart={onDragStart}   >
    Hello
  </div>
  <div id="draggable-9" className='word' draggable="true" onDragStart={onDragStart}   >
    Welcome
  </div>
  <br />
  <div id="draggable-10" className='word' draggable="true" onDragStart={onDragStart}   >
    sorry
  </div>
  
  <div id="draggable-1" className='word' draggable="true" onDragStart={onDragStart}   >
    fine
  </div>
  <div id="draggable-12" className='word' draggable="true" onDragStart={onDragStart}   >
    salut
  </div>
  <div id="draggable-11" className='word' draggable="true" onDragStart={onDragStart}   >
    merci
  </div>
  <div id="draggable-13" className='word' draggable="true" onDragStart={onDragStart}   >
    Good
  </div>
  <div id="draggable-14" className='word' draggable="true" onDragStart={onDragStart}   >
    whatsupp
  </div>
  </div>
   
       <label> 
      {(someWr && errorWr) && <div style={{color:'red'}}>{someWr}</div>}
      </label>
     {/*  <div  className='errorWr' > {errorWr}Something Wrong! </div> */}

       <br />
       <button id="btnSpeak" type="submit" onClick={checkTranslate} className="button">Check!</button><br />
      < Speech  text="Welcome, have a good day" voice='Daniel'   />  <br />
  
      
    
       
      

  

  </div>
)

  
  
    }