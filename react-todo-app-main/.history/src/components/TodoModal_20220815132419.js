import React from 'react'
import styles from "../styles/modules/modal.module.scss"
import { MdOutlineClose } from 'react-icons/md';
const TodoModal = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
    <div className={styles.closeButton}>
    <MdOutlineClose>
    </MdOutlineClose>
    </div>
    <h1>This is modal</h1>
    </div>
    </div>
      

  )
}

export default TodoModal
