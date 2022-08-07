import React from 'react'
import styled from 'styled-components'

function Menu() {
  const menu = styled.div`
    height : 100%;
  `

  return (
    <div style={{ display : 'flex',  height : '40px', borderBottom : 'var(--border)', justifyContent : 'center', alignItems : 'center'}}>
      <div style = {{width : '60vw', height : '100%'}}>
        <div style = {{width : '25vw' , display : 'flex', alignItems : 'center', height : '100%', justifyContent : 'center' }}>
          <menu>NOW</menu>
          <menu>오디오북 챗북</menu>
          <menu>스토리</menu>
        </div>
      </div>
    </div>
  )
}

export default Menu
