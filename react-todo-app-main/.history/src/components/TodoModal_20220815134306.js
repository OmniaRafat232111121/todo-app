import React from 'react'
import styles from "../styles/modules/modal.module.scss"
import { MdOutlineClose } from 'react-icons/md';
const TodoModal = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
    <div className={styles.closeButton}>
    <MdOutlineClose/>
    
    </div>
    <form className={stylesform}>
    <h1 classname={styles.formTitle}>ADD Task</h1>
    </form>
  
    </div>
    </div>
      
  );
}

export default TodoModal
