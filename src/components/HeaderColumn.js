import React from "react";
import Task from './Task'
import { TasksContext } from '../context'
import '../App.css'

const HeaderColumn = ({item})=> {

    const generateTasksList = (tasks, moveTaskRight, moveTaskLeft) => {
     
        return tasks.map((task) => (
          <Task  key={task.id} task={task} moveTaskRight={moveTaskRight} moveTaskLeft={moveTaskLeft}  />
        ));
      };

    return(
    
       <TasksContext.Consumer>
          {context => (
                <div className="column">
                <div className="columnTitleBox">  
                    <h3 className="columnName">{item.name}</h3>
                    <span className="columnLimit"> Limit: {item.limit}</span>
                </div>
        
             
                {generateTasksList(
                context.addTaskToColumn(item.id),
                context.moveTaskRight,
                context.moveTaskLeft,
                
                
             )}
                </div>
          )}

        </TasksContext.Consumer>
      
    )

}

export default HeaderColumn;