import React from 'react'

function Card_lg({num}) {

  return (
    <div style = 
        {{  height : '420px',
        width : '300px',  
        backgroundColor : 'red',
        borderRadius : '3%'
    }}
    onMouseDown = {(e) => {e.preventDefault()}}
    >
      {num}
    </div>
  )
}

export default Card_lg
