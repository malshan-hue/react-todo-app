import React from "react";

function DisplayToDo({todos, deleteTodo, setCompletedTodos}) {

    //handles the delete button click event and deletes the todo from the list
    const handleDelete = (id) => {
        deleteTodo(id);
    }

    const handleComplete = (id) => {
        const completedTodos = todos.find(todo => todo.id === id);

        if(completedTodos){

            completedTodos.completedDate = new Date().toLocaleString();

            setCompletedTodos((prevCompletedTodos) => [...prevCompletedTodos, completedTodos]);

            deleteTodo(id);
        }
    }

    return(

        <div className="container">
            <br/>
            <div className="row">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Todo Id</th>
                            <th>description</th>
                            <th>Created Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.created}</td>
                                <td>
                                    <button className="btn btn-success"
                                        onClick={() => handleComplete(todo.id)}>Complete</button> &nbsp; 
                                    <button className="btn btn-danger"
                                        onClick={() => handleDelete(todo.id)}>Delete</button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
    )

}

export default DisplayToDo;