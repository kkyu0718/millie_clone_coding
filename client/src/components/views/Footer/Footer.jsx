import React from 'react'

function Footer() {
  return (
    <div style = {{borderTop :'var(--border)' }}>
      <div style = {{border : 'var(--border)', height : '20px', display : 'flex', justifyContent : 'center', alignItems : 'center'}}><div style = {{width : '80vw'}}>[공지] 종이책 배송 일정 변경 안내</div></div>
      <div style = {{border : 'var(--border)' , height : '40px', display : 'flex', justifyContent : 'center', alignItems : 'center'}}><div style = {{width : '80vw'}}>(주)밀리의 서재</div></div>
    </div>
  )
}

export default Footer