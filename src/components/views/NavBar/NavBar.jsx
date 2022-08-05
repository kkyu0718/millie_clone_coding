import React from 'react';


function NavBar() {
  return (
    <div className='menu' 
    style = {{display : 'flex', justifyContent : 'space-around'}}
    >
        <div>Home</div>
        <div>Todo</div>
        <div>Member</div>
    </div>
  )
}

export default NavBar