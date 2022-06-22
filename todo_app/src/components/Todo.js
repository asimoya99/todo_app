import React from 'react'

const Todo = (props) => {
  return (
    <div>
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn'> DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default Todo
