import React, { useState, useEffect }from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function Events(props) {

    const [potlucks, setPotlucks] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get( /*add API here*/ )
        .then(res => {
            setPotlucks(res.data);
        })
        .catch(err => {console.log(err);
        });
    }, []);

    const deletePotluckEvent = color => {
        axiosWithAuth()
        .delete(/*add API event here*/`${potlucks.id}`)
        .then(res => {
            const newPotluckList = potlucks.filter((potluck) => {
                return potluck.id !== res.data
            })
            setPotlucks(newPotluckList)
        })
        .catch(err => console.log(err))
    };

    return(
        <div>
            {potlucks.map((potLuck) => {
                return (
                    <div key={potLuck.id}>
                        <h3>Event Name: {potLuck.eventName}</h3>
                        <p>Location: {potLuck.location }</p>
                        <p>Date: {potLuck.date}</p>
                        <p>Time: {potLuck.time}</p>
                    </div>    
                )
            })}
            <button onClick = {e => {
                e.stopPropagation();
                deletePotluckEvent(potlucks.id)
            }}> Delete Potluck Event </button>
        </div>
    )
}