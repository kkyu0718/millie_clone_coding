import React, { useState } from 'react'
import {Button} from 'antd'
import "antd/dist/antd.css" // css를 가져온다

function Todos() {
  const [Todo, setTodo] = useState("")
  const [TodoList, setTodoList] = useState(['apple'])

  const submitHandler = (e) => {
    e.preventDefault()
    setTodoList([...setTodo], e.target.value)

  }

  const changeHandler = (e) => {
    setTodo(e.target.value)
  }

  return (
    <div style=
      {{ display : 'flex',
      flexDirection : 'column',
      alignItems : 'center', 
      justifyContent: 'center', 
      margin : '0px 20px',
      }}>
      <div>
        <div>
          list
        </div>

      </div>
      <div style=
        {{ display : 'flex', 
        width : '100%' ,
        maxWidth : "400px"
        }}>
          <form
            style = 
              {{borderWidth : '1px', 
              width : '100%', 
              padding : '4px',
               }}
              >
            <input 
              type = 'text' 
              placeholder = '할 일을 입력하세요' 
              value = {Todo}
              style = {{  width : '100%'  }}
              onChange = {changeHandler}
            />
          </form>
          <div 
            style = 
              {{borderWidth : '1px',
              textAlign : 'center',
              width : '40px',
              display : 'flex',
              alignItems : 'center', 
              justifyContent : 'center'}}>
            <button type = 'submit' onClick={submitHandler} >edit</button>
          </div>
      </div>    
    </div>  
    
    
  )
}

export default Todos
