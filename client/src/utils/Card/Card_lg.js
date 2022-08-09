import React from 'react'

function Card_lg() {

  return (
    <div style = 
        {{  height : '420px',
        width : '300px',  
        backgroundColor : 'red',
        borderRadius : '3%'
    }}
    onMouseDown = {(e) => {e.preventDefault()}}
    >
      Card_lg
    </div>
  )
}

export default Card_lg
