import React from 'react'
import Die from './Die.jsx'
import {nanoid} from 'nanoid';
const App = () => {
  // const[dice,setdice]=React.useState(generateAlldice());  --it rerenders every time 
  const[dice,setdice]=React.useState(()=>generateAlldice());

  const gamewon=dice.every((dieobj)=>dieobj.isHeld) && 
    dice.every((dieobj)=>dieobj.value===dice[0].value);

  function generateAlldice(){
    return new Array(10).fill(0)
    .map(()=>({
      value:Math.ceil(Math.random()*6),
      isHeld:false,
      id:nanoid()
    }))
  }

  function rolldice(){
    if(!gamewon){
      const update=dice.map((dieobj)=>{
          return dieobj.isHeld ? dieobj : {...dieobj,value: Math.ceil(Math.random()*6)}
      })
      setdice(update);
    }
    else
     setdice(generateAlldice());
  }

  function flipstate(tar_id){
    console.log(tar_id);
    const update=dice.map((dieobj)=>{
      return dieobj.id==tar_id ? {...dieobj, isHeld:!dieobj.isHeld} :dieobj;
    })
    setdice(update);
  }

const diceelement = dice.map((dieobj, idx) => (
 <Die
  key={dieobj.id}
  onClick={()=>setidxfalse(idx)}
  value={dieobj.value}
  isHeld={dieobj.isHeld}
  flipstate={flipstate}
  id={dieobj.id}
/>
));

  return (
    <main>
      <h1 style={{color:'rgb(255, 0, 166)',fontSize:'2.5rem'}}>Tenzies</h1>
      <div className='content'>Roll until dice are same. Click each die to freeze it at its current value between rolls</div>
      <div className='die-container'>
        {diceelement}
      </div>
      <button className='roll-bt' onClick={rolldice}>{gamewon? "New Game": "Roll"}</button>
    </main>
  )
}

export default App
