import React from 'react'
import styled from 'styled-components'

function Menu() {
  
  return (
    <div style={{ display : 'flex',  height : '30px', borderBottom : 'var(--border)', justifyContent : 'center', alignItems : 'center'}}>
      <div style = {{width : '60vw', height : '100%'}}>
        <div style = {{
            marginLeft : '50px',
            width : '200px' , 
            display : 'flex', 
            alignItems : 'center', 
            height : '100%', 
            justifyContent : 'space-between',
            fontSize : '13px',
            fontFamily : 'KoPubDotumMedium' }}>
          <div>NOW</div>
          <div>오디오북 챗북</div>
          <div>스토리</div>
        </div>
      </div>
    </div>
  )
}

export default Menu
