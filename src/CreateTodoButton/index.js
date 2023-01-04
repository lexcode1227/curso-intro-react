import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props){
    const onClickButton = ()=> { 
        props.setOpenModal(previewState => !previewState);
    }

    return(
        <button className="CreateTodoButton" onClick={onClickButton}>
            +
        </button>
    );
}

export { CreateTodoButton};