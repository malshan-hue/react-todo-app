import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';


function MyForm({ setTodos }) {

    //allows to set the value of the input field
    const [inputValue, setInputValue] = useState('');

    //handles the input change event and sets the value of the input field
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //handles the form submit event and adds the todo to the list
    const handleFormSubmit = (e) => {
        
        //prevents the default behavior of the form
        e.preventDefault();

        //creates a todo object with the input value and a unique id
        const todo = {

            id: uuidv4(),
            description: inputValue,
            created: new Date().toLocaleString()
        }

        //calls the setTodos function passed from the parent component
        setTodos((prevTodos) => [...prevTodos, todo]);

        //resets the input field
        setInputValue('');
    }

  return (
    <div className="container">
        <div className="container text-center">
            <h1>Todo App</h1>
        </div>
        <br/>
        <div class="row">
            <div className="col-md-4 offset-4">
                <form onSubmit={handleFormSubmit}>
                    <div className="d-flex">
                        <input type="text" name="todo" className="form-control"
                            required 
                            placeholder="Add todo"
                            value={inputValue}
                            onChange={handleInputChange} />

                        <button type="submit" className="btn btn-outline-secondary">Add</button>
                    </div>
                </form>
            </div>
        </div>

  </div>
  
  );
}

export default MyForm;
