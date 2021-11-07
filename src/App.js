import React, {useEffect, useState} from 'react';
import "./style.css"
import AddingTask from "./AddingTask";
import Task from "./Task";
import DateComponent from "./DateComponent";

function handleShowCreating(style, setStyle){
    setStyle({display: "block"});
}

function handleHiddenCreating(style, setStyle){
    setStyle({display: "none"});
}

//function handleSetStyleEmptyPlace{setS}

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

  const [styleAddingBlock, setStyleAddingBlock] = useState({display: "none"});
  const [styleEmptyPlace, setStyleEmptyPlace] = useState({display: "none"})
  const [taskId, setTaskId] = useState(0);
  const [tasks, setTasks] = useState([]);

/*  useEffect(() => {
      if (tasks.length === 0){
          setStyleEmptyPlace( {display: "flex"})
      }else{
          setStyleEmptyPlace( {display: "none"})
      }
      }
  )*/

  const listTasks = tasks.map(element =>
      <li key={element.id}> <Task title={element.title} deleteTask={handleDeleteTask} id={element.id} tasks={tasks} setTasks={setTasks}/> </li>
  );

  return (
      <div>
        <header>
          <span>My Todo List</span>
        </header>

        <div className="home-page">
          <DateComponent/>
          <div>
              <div style={styleEmptyPlace} className="empty-place">
                  To create a task, click on the button.
              </div>
              <ul>
                  {listTasks}
              </ul>
            <button onClick={() => {handleShowCreating(styleAddingBlock,setStyleAddingBlock)}} className="todo-add-button">+</button>
          </div>
        </div>
        <div style={styleAddingBlock} className="adding-item-main">
          <AddingTask styleAddingBlock={styleAddingBlock} setStyleAddingBlock={setStyleAddingBlock} tasks={tasks} setTasks={setTasks} taskId={taskId} setTaskId={setTaskId} hiddenCreating={handleHiddenCreating}/>
        </div>
      </div>
  );
}

export default App;
