import React, {useEffect, useState} from "react";

export const SetTemperature = () => {
    const [temperature, setTemperature] = useState(0);
    const [temperatureClass, setTemperatureClass] = useState("cold");

    useEffect(() => {
        temperature > 15 ? setTemperatureClass("hot") : setTemperatureClass("cold");
    }, [temperature]);

    const addTemperature = () => {
        if(temperature < 35) {
            setTemperature(temperature + 1);
        }
    }
    const lowTemperature = () => {
        if(temperature > 0) {
            setTemperature(temperature - 1);
        }
    }

    return (
        <div className="main">
            <div className={temperatureClass}>
                {temperature}&deg;C
            </div>
            <div className="buttons">
                <button className="plus" onClick={addTemperature}> + </button>
                <button className="minus" onClick={lowTemperature}> - </button>
            </div>
        </div>
    )
}