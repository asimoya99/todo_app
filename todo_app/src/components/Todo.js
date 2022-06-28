import React, { useState } from 'react'
import Backdrop from './Backdrop'

import Modal from './Modal'
const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const deleteHandler = () => {
    setModalIsOpen(true)
  }

  const onCloseHandler = () => {
    setModalIsOpen(false)
  }
  const closeModalHandler = () => {
    setModalIsOpen(false)
  }
  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          {' '}
          DELETE
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={onCloseHandler} />}
    </div>
  )
}

export default Todo
