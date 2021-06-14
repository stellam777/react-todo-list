import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, setTasks }) => {
  //[{ singleTask: "hkhagkhag" }, { singleTask: "hkhagkhag" }]
  return (
    <div className='tasklist-container'>
      {tasks.map((sTask, i) => {
        return (
          <Task key={i} tasks={tasks} setTasks={setTasks} singleTask={sTask.singleTask} />
        );
      })}
    </div>
  );
};

export default TaskList;
