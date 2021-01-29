import React, {useContext} from "react";
import {TasksContext}  from "../context";
import HeaderColumn from "./HeaderColumn"
import "../App.css"


  const Column = () => {
     const {column} = useContext(TasksContext)

     const showTitleOfColumns = column.map(item => (
             <HeaderColumn key={item.id} item={item}  {...item}/>
              
           ))
         
       return (
             <>
                <div className="columnParent" >
                {showTitleOfColumns}
                </div>
                
               </>
            );
          };
 

export default Column;