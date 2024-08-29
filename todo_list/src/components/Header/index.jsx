import todoLogo from '../../assets/todoLogo.svg';
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export function Header({ handleAddTask}) {
  const [title, setTitle] = useState('');


  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="ADD A NEW TASK" type="text" onChange={onChangeTitle} value={title} />
        <button>CREATE<AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  )
}