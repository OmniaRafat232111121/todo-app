import React,{useState} from 'react'
import styles from "../styles/modules/modal.module.scss"
import { MdOutlineClose } from 'react-icons/md';
import Button from './Button';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlice';
const TodoModal = ({modalOpen,setModalOpen}) => {
  const dispatch=useDispatch();
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please enter a title');
      return;
    }
    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success('Task added successfully');
      }
      else{
        toast.error('Title shouldnt be emp added successfully');
      }
  return (
    <>
    {modalOpen &&(
    <div className={styles.wrapper}>
    <div className={styles.container}>
    <div className={styles.closeButton}
    onClick={()=>setModalOpen(false)}
    onKeyDown={()=>setModalOpen(false)}
    tabIndex={0}
    role="button"
    >

    <MdOutlineClose/>
    
    </div>
    <form className={styles.form}
    onSubmit={(e)=>handleSubmit(e)}>
    <h1 className={styles.formTitle}>ADD Task</h1>
    <label htmlFor="title">
    Title
    <input 
    type="text"
     id="title" 
     value={title}
    onChange={(e)=>setTitle(e.target.value)}/>
    </label>
    <label htmlFor="status">
    Status  
    <select id="status"
    name="status"
    value={status}
   onChange={(e)=>setStatus(e.target.value)} >
    <option value="incomplete">Incomplete</option>
    <option value="complete">Completed</option>
    </select>
    </label>
    <div className={styles.buttonContainer}>
    <Button type="submit" variant="primary">
             Add task
                </Button>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>   
              
    </div>
    </form>
  
    </div>
    </div>
    )}
    </>
  );
}

export default TodoModal
