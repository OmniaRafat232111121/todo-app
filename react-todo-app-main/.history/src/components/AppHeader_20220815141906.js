import React, { useState } from 'react';
import TodoModal from './TodoModal';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';


function AppHeader() {
  const [modalOpen,setModalOpen]
  return (
    <div className={styles.appHeader}>
      <Button variant="primary">
        Add Task
      </Button>
      <SelectButton 
      id="status"
       
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <TodoModal  type="add"/>
    </div>
  );
}

export default AppHeader;