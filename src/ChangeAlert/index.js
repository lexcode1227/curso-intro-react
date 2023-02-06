import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css"

function ChangeAlert({ sincronize }){
    const { show, toggleShow } = useStorageListener(sincronize)
    if (show) {
        return (
        <div className="ChangeAlert-Bg">
            <div className="ChangeAlertModal">
                <div className="ChangeAlertCard">
                <p>Se han generado nuevos cambios</p>
                <button 
                onClick={()=> toggleShow(false) }
                className="ChangeAlertBtn"
                >
                    Recargar información
                </button>
                </div> 
            </div>
        </div>
        )
    } else {
        return null
    }
    
}

export { ChangeAlert }