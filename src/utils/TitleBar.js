import React from 'react'

function TitleBar({title}) {
  return (
    <div style = {{display : 'flex', 
              justifyContent : 'space-between',
              alignItems : 'center', 
              width : '100%',
              height : '50px',
              margin : '10px 0',
              padding : '10 20px', 
              fontSize : '18px', 
              fontFamily : 'KoPubDotumMedium'        
              }}>
          <div>{title}</div>
          <div>{'>'}</div>
        </div>
  )
}

export default TitleBar
