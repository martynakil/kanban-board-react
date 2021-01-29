import React from "react";
import '../App.css'



const Task = ({task, moveTaskRight, moveTaskLeft}) => {

  const handleMoveTaskRight = (task) => {
    moveTaskRight(task)
  }

  const handleMoveTaskLeft = (task) => {
    moveTaskLeft(task)
  }

    return (
      <div className="task" >
  
        <h3 className="taskName">{task.name}</h3>
        <p className="taskName taskOwner">Owner: {task.owner} </p>
        <div className="boxButtons">
            <button className="btnMove" onClick={() => handleMoveTaskRight(task, true)}>{'-->'}</button>
            <button className="btnMove" onClick={() => handleMoveTaskLeft(task, false)}>{'<--'}</button>
        </div>
      </div>
    );
  };
  
  export default Task;
  