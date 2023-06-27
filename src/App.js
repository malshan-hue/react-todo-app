import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MyForm from "./components/add-todo.component";
import DisplayToDo from "./components/display-to-do.component";


function App() {

  //stores the list of todos in the state variable todos and initializes it to an empty array
  const [todos, setTodos] = useState([]);

  //handles the delete button click event and deletes the todo from the list 
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <MyForm setTodos={setTodos}/>
      <DisplayToDo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
