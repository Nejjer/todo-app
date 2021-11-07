import React, {useState} from "react";


function AddingTask(props){
    const [disabled, setDisabled] = useState(true);
    const [inputValue, setInputValue] = useState("");


    const onChange = function(event){

        setDisabled(event.target.value.length === 0);

        setInputValue(event.target.value);

    }

    const onClickCancel = () => {
        setInputValue("");
        props.hiddenCreating(props.style, props.setStyleAddingBlock);
    }

    const onClickAdd = () => {
        setInputValue("");
        props.hiddenCreating(props.style, props.setStyleAddingBlock);

        let newId = props.taskId + 1;
        props.setTaskId(newId);

        let newArr = [...props.tasks, {title: inputValue, id:newId}];

        props.setTasks(newArr);
    }

    return(
        <div className="adding-item">
            <div className="adding-item__title">
                New Todo
            </div>
            <div className="adding-item__description">
                Please write content of todo in input below!
            </div>
            <input onChange={onChange} placeholder="Do something!" type="text" className="adding-item__input" value={inputValue}/>
            <div className="adding-item__buttons">
                <button disabled={disabled} onClick={onClickAdd} className="adding-item__button-add">Add</button>
                <button onClick={onClickCancel} className="adding-item__button-cancel">Cancel</button>
            </div>
        </div>
    )
}

export default AddingTask;
