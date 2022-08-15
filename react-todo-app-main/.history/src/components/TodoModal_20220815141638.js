import React from 'react'
import styles from "../styles/modules/modal.module.scss"
import { MdOutlineClose } from 'react-icons/md';
import Button from './Button';
const TodoModal = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
    <div className={styles.closeButton}>
    <MdOutlineClose/>
    
    </div>
    <form className={styles.form}>
    <h1 classname={styles.formTitle}>ADD Task</h1>
    <label htmlFor="title">
    Title
    <input type="text" id="title" />
    </label>
    <label htmlFor="status">
    Status  
    <select id="type" >
    <option value="incomplete">Incomplete</option>
    <option value="complete">Completed</option>
    </select>
    </label>
    <div className={styles.buttonContainer}>
    <Button type="submit" variant="primary">
                 
                </Button>
              
              
    </div>
    </form>
  
    </div>
    </div>
      
  );
}

export default TodoModal
