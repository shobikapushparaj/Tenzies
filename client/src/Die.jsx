import React from 'react'

function die(props) {
  const styles={
    backgroundColor :props.isHeld ? "rgb(255 0 160 / 33%)":"white"
  }
  console.log(props);
  return (
    <button onClick={()=>props.flipstate(props.id)}style={styles}>
        {props.value}
    </button>
  )
}

export default die
