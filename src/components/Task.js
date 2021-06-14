import React from 'react';

const Task = ({ singleTask, setTasks, tasks }) => {
  console.log("SINGLE TASK", singleTask)
  const deleteTask = (e) => {
    let newList = tasks.filter((task) => task.singleTask !== singleTask);
    setTasks(newList);
  };
    //[{ singleTask: "hkhagkhag" }, { singleTask: "hkhagkhag" }]

  return (
    <div className='task'>
      <input type='checkbox' />
      <p>{singleTask}</p>
      <button type='button'>Edit</button>
      <button className='delete-button' onClick={deleteTask} type='button'>
        Delete
      </button>
    </div>
  );
};

export default Task;
