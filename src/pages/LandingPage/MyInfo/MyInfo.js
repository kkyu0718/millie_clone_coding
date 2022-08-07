import React from 'react'
import styled from 'styled-components'

function MyInfo() {
  


  return (<>
        <div style = {{ display : 'flex', justifyContent : 'space-between', width : '100%', marginTop : '60px' , alignItems : 'flex-end'}}>
          <div style={{ fontSize : '20px', fontFamily : 'KoPubDotumMedium'}}>책읽는잠만보님</div>
          <div style={{ fontSize : '10px', color : 'var(--darkgray)'}}>8일 5밀리</div>
        </div>
        <div style = {{display : 'flex', 
              justifyContent : 'space-between',
              alignItems : 'center', 
              width : '100%',
              height : '50px',
              border : 'var(--border)',
              margin : '10px 0',
              padding : '0 10px', 
              borderRadius : '10px',
              fontSize : '13px'
        }}>
          <div>현재 8일째 5밀리, 밀리 적립 TIP을 살펴보세요.</div>
          <div>{'>'}</div>
        </div>
      </>
  )
}

export default MyInfo
