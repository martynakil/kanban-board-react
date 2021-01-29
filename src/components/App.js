import React from 'react';
import '../App.css';
import Board from './Board'



const App = () => {


  
    return (
        <>
        <h1 className="boardTitle">Board</h1>
        <div className="boardBox">
                <Board/>
        </div>
   
        </>
    )

}

export default App;