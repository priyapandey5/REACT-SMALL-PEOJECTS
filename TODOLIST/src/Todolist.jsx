import { useState} from "react";
import {v4 as uuidv4} from "uuid";
import Joker from "./Joker";
import "./Todolist.css"

export default function Todolist(){
    let[todos , setTodos] = useState([{task:"sample task", id: uuidv4(), isDone:false }]);
    let [newTodo , setNewTodo]= useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return[...prevTodos, {task:newTodo, id:uuidv4(), isDone:false }];
    })
    setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => 
            todos.filter((prevTodos) => prevTodos.id != id)); 
        
    };

    let upperCaseOne = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if(todo.id === id) {
                return {...todo , task:todo.task.toUpperCase(),};
            }else{
                return todo;
            }
        })
     );
    };

    let upperCaseAll = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return {...todo , task:todo.task.toUpperCase(),
            };
        })
    );
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) =>
        prevTodos.map((todo) => {
        if(todo.id == id){
            return {...todo , isDone:true};
        }else {
            return todo;
        }
    }));
  };

  let markAsDoneAll = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return {...todo , isDone:true,
            };
        })
    );
    };

    return(
        <div className="body">
        <div className="navbar">
        <h1>TO DO LIST</h1>
        <Joker />
        </div>
          <div className="todolist">
           <input placeholder="Add task" value={newTodo} onChange={updateTodoValue}></input>
           <button onClick={addNewTask}>Add new task</button>

           <br></br><br></br>
           <button onClick = {upperCaseAll}>UpperCase All</button>
           <button onClick = {markAsDoneAll}>MarkAsDone All</button>
           <hr></hr>
           <ul>{
               todos.map((todo) => (
                 <li key={todo.id}>

                 <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>&nbsp;&nbsp;
                 <button onClick = { () => deleteTodo(todo.id)}>Delete</button>
                 <button onClick = { () => upperCaseOne(todo.id)}>UpperCase</button>
                 <button onClick = { () => markAsDone(todo.id)}>MarkAsDone</button>
                 </li>
               ))
           }</ul>
           
           </div>
        </div>   
    );
}