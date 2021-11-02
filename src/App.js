import React, { useState } from 'react';
import "./style.css"
import AddingTask from "./AddingTask";
import Task from "./Task";

function handleShowCreating(style, setStyle){
    setStyle({display: "block"});
}

function handleHiddenCreating(style, setStyle){
    setStyle({display: "none"});
}

function handleDeleteTask(tasks, setTasks, deleteId){
    let newArr = tasks.slice();
    for (let i = 0; i < newArr.length; i++){
        if (newArr[i].id === deleteId){
            newArr.splice(i, 1);
        }
    }
    setTasks(newArr);
}

function App() {

  const [style, setStyle] = useState({display: "none"});
  const [taskId, setTaskId] = useState(0);
  const [tasks, setTasks] = useState([]);

  const listTasks = tasks.map(element =>
      <li key={element.id}> <Task title={element.title} deleteTask={handleDeleteTask} id={element.id} tasks={tasks} setTasks={setTasks}/> </li>
  );

  return (
      <div>
        <header>
          <span>My Todo List</span>
        </header>

        <div className="home-page">
          <div className="title">
            <div className="title__date">
              <div className="date-day">12</div>
              <div className="date">
                <div className="date-month">APR</div>
                <div className="date-year">2021</div>
              </div>
            </div>
            <div className="title__day-of-week">
              TUESDAY
            </div>
          </div>
          <div>
              <ul>
                  {listTasks}
              </ul>
            <button onClick={() => {handleShowCreating(style,setStyle)}} className="todo-add-button">+</button>
          </div>
        </div>
        <div style={style} className="adding-item-main">
          <AddingTask style={style} setStyle={setStyle} tasks={tasks} setTasks={setTasks} taskId={taskId} setTaskId={setTaskId} hiddenCreating={handleHiddenCreating}/>
        </div>
      </div>
  );
}

export default App;
