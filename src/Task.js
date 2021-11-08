function Task(props){

    return(
        <li>
            <div className="todo-item">
                <div className="todo-item__text">
                    <div className="todo-item__item-title">
                        {props.title}
                    </div>
                </div>
                <button onClick={() => {props.deleteTask(props.tasks, props.setTasks, props.id)}} className="todo-item__button">
                </button>
            </div>
        </li>
    );
}

export default Task;