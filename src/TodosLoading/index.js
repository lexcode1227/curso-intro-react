import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
    // return <p>Estamos cargando, no desesperes</p>
    return (
        <li className="TodoItem-loading">
            <div className="LoaderBalls">
                <span className="LoaderBalls__item"></span>
                <span className="LoaderBalls__item"></span>
                <span className="LoaderBalls__item"></span>
            </div>
        </li>
    )
}

export { TodosLoading };