import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import "./TodoIcon.css";

const iconTypes = {
    "check": color => (<FaCheck className="Icon-svg Icon-svg--check" fill={color}/>),
    "delete": color =>  (<FaTimes className="Icon-svg Icon-svg--delete" fill={color}/>),
};
function TodoIcon( {type, color = "gray", onClick}) {
    return (
        <span className={`Icon-container Icon-container--${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };