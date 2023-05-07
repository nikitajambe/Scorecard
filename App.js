import { useState } from 'react';
import './App.css';

function App() {
  const[scoreA,setScoreA]=useState(0);
  const[scoreB,setScoreB]=useState(0);
  return(
    <>
   
    <div className='team-container'>
    
    <div>
    <button className='score-btn'>🏏 Scoresheet 🏏</button>
     <div className='title-name'>
     <div className='score-card'>
      <h2>TEAM A</h2> <br/>
      <h3>{scoreA}</h3><br/>
      <button className='inc-dec-btn' onClick={()=>{
        setScoreA(scoreA+1)
      }}>
        +
      </button> 

      <button className='inc-dec-btn' onClick={()=>{
        if(scoreA==0){
          alert('score cant be Negative')
        }
        else{
          setScoreA(scoreA-1)
        }
        
      }}>
        -
        </button>
        </div>

     <div  className='score-card'>
        <h2>TEAM B</h2> <br/>
      <h3>{scoreB}</h3> <br/>
      <button className='inc-dec-btn' onClick={()=>{
        setScoreB(scoreB+1)
      }}>
        +
      </button> 

      <button className='inc-dec-btn' onClick={()=>{
        if(scoreB==0){
          alert('score cant be Negative')
        }
        else{
          setScoreB(scoreB-1)
        }
        
      }}>
        -
        </button>
        </div>
        </div>

        </div>
    </div>
    </>
  )
          
}

export default App;
