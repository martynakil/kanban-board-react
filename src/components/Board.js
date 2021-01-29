import React, { useContext, useState, useEffect } from 'react';
import '../App.css';
import { ColumnsContext, TasksContext } from '../context';
import useLocalStorage from './useLocalStorage';
import Column from './Column';
import Form from './Form';


const Board = (props) => {
    const columns = useContext(ColumnsContext);
    const [savedTasks, setSavedTasks] = useLocalStorage('tasks', []);
    const [tasks, setTasks] = useState(savedTasks);

    useEffect(() => {
        setSavedTasks(tasks)
    }, [tasks])

    const addTask = (task) => {
        const firstColumnID = 1;

        if (checkLimitInColumn(firstColumnID)) {
           
            const maxTaskId = Math.max(...tasks.map((t) => t.id), 0);
            const id = maxTaskId + 1;
         
            const newTask = { ...task, idColumn: 1 , id};
            setTasks([...tasks, newTask]);
            // setSavedTasks([...savedTasks, newTask]);
      
        } else {
            window.alert(
                'no space in first column. you can move other tasks and free up space.'
            );
        }
    };

    const incrementTaskColumn = (task) => {
        console.log(task)
        const newTasks = tasks.map((t) => {
            if (t.id === task.id) {
                return { ...t, idColumn: t.idColumn +1 };
            }

            return t;
        });

        setTasks(newTasks);

    };

    const decrementTaskColumn = (task) => {
        const newTasks = tasks.map((t) => {
            if (t.id === task.id ) {
                console.log(task.idColumn)
                return { ...t, idColumn: t.idColumn - 1 };
            }
            return t;
        });
        setTasks(newTasks);
      

    };

    const moveTaskRight = (task) => {
        
        if (checkLimitInColumn(task.idColumn +1)) {
            incrementTaskColumn(task);
      
        } else {
            window.alert('no space in this column!');
        }
    };

 
    const getCountTasksinColumn = (columnId) => {
        return tasks.filter((task) => task.idColumn === columnId).length;
    };



    const checkLimitInColumn = (idColumn) => {
        for (let i = 0; i < columns.length; i++) {
           
            if (idColumn === columns[i].id) {
                if (getCountTasksinColumn(idColumn) < columns[i].limit) {
                    return true;
                }

            return false;

            }
      
        }
        return false;

    };

    const moveTaskLeft = (task) => {
    if (checkLimitInColumn(task.idColumn + 1)) {
        decrementTaskColumn(task);
        } else {
            window.alert('no space in this column!!!!!');
        }
    };

    return (
        <TasksContext.Provider
           
            value={{
                tasks,
                addTaskToColumn: (columnID) => {
                    return tasks.filter((task) => task.idColumn === columnID);
                },
                column: columns,
                addTask,
                moveTaskRight,
                moveTaskLeft
            }}
        >
            <Column column={columns} />
            <Form />
        </TasksContext.Provider>
    );
};

export default Board;
