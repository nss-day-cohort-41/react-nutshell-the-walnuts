import React, { useState, useEffect } from 'react';
//import the components we will need
import TaskCard from './TaskCard';
import TaskManager from '../../modules/TaskManager';

const TaskList = (props) => {
  const [tasks, setTask] = useState([]);

  const getTask = () => {
    return TaskManager.getAll().then(allTask => {
      setTask(allTask)
    });
  };

  const deleteTask = id => {
    TaskManager.delete(id)
      .then(() => TaskManager.getAll()
        .then(setTask));
  };

  useEffect(() => {
    getTask();
  }, []);

  

  return (
    <div className="container-cards">
        <>
      <section className="section-content">
        <button type="button" className="btn"
        onClick={() => {props.history.push("/tasks/new")}}>
        Admit Animal
        </button>
      </section>
</>
      {tasks.map(task => <TaskCard 
       key={task.id} 
       task={task}
       deleteTask={deleteTask}
       {...props}/>)}
       
    </div>
  );
};
export default TaskList