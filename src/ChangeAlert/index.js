import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css"

function ChangeAlert({ show, toggleShow}){
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }