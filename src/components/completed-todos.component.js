import React from "react";

function CompletedTodos({completedTodos}){

    return(

        <div className="container">
            <div className="container text-center">
            <h1>Completed Todos</h1>
            </div>    

            <div className="row">
            <div className="text-center">
                {completedTodos.map((todo, index) =>(
                    
                    <p key={index}>
                        {index+1} <s>{todo.description}</s> {todo.completedDate}
                    </p>
                ))}
            </div>   

            </div>
        </div>
    )
}

export default CompletedTodos;