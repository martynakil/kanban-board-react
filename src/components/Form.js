
import React, { useReducer, useContext } from "react";
import { TasksContext } from "../context";
import "../App.css"

const Form = ()=> {


    const init = {
        name: "",
        owner: "",
      };
    
      const reducer = (state, { name, value }) => {
        return { ...state, [name]: value };
      };
      const tasksContext = useContext(TasksContext);

      const [state, dispatch] = useReducer(reducer, init);
      const { name, owner } = state;


      const handleSubmitForm = (e) => {
          e.preventDefault()

          const task = {
            name,
            owner: owner,
          };

          tasksContext.addTask(task);
          resetInputs();

      }


  

      const resetInputs = () => {
        dispatch({ name: "name", value: "" });
        dispatch({ name: "owner", value: "" });
      };



    return(
        <>
          <h4 className="formTitle">Add new task</h4>
          <div className="formBox">
            <form className="form" onSubmit={e => handleSubmitForm(e)}>

                <label className="labelForm">
                    Task:
                    <input 
                    className="inputForm"
                    name="name"
                    type="text"
                    value={name}
                    onChange={e => dispatch(e.target)}
                    required
                    />
                </label>



                <label className="labelForm">
                    Owner:
                    <input 
                    className="inputForm"
                    name="owner"
                    type="text"
                    value={owner}
                    onChange={e => dispatch(e.target)}
                    required
                    />
                </label>
                <button type="submit" className="buttonForm" value="Add">add</button>

            </form>
          </div>
          
        </>
    )

}

export default Form;