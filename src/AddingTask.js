import React, {useState} from "react";


function changeInput(event, value, setValue){
    setValue(event)
}



function AddingTask(props){
    const onChange = function(event){
        changeInput(event.target.value, inputValue, setInputValue)
    }
    const onClickCancel = () => {
        setInputValue("");
        props.hiddenCreating(props.style, props.setStyle);
    }
    const onClickAdd = () => {
        setInputValue("");
        props.hiddenCreating(props.style, props.setStyle);

        let newId = props.taskId + 1;
        props.setTaskId(newId);

        //let newArr = props.tasks.slice();
        let newArr = [...props.tasks, {title: inputValue, id:newId}];
        //newArr.push({title: newId, id:newId});
        //props.tasks.slice().push(inputValue)
        props.setTasks(newArr);
    }
    const [inputValue, setInputValue] = useState("")

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
                <button onClick={onClickAdd} className="adding-item__button-add">Add</button>
                <button onClick={onClickCancel} className="adding-item__button-cancel">Cancel</button>
            </div>
        </div>
    )
}

export default AddingTask;