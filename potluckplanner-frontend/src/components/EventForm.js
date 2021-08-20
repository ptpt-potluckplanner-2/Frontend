import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


export default function newPotluckInfoForm () {
    const [newPotluckInfo, setNewPotluckInfo] = useState(initialPotluckInfo)
    const changeHandler = e => {
        setNewPotluckInfo({
            ...newPotluckInfo,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = e => {
        e.preventDefault()
        const newPotluck = {
            eventName: newPotluckInfo.eventName,
            location: newPotluckInfo.location,
            date: newPotluckInfo.date,
            time: newPotluckInfo.time,
            id: Date.now(),
        };

        axiosWithAuth()
            .post(/*add API event id here*/ newPotluck)
            .then(res => {
            console.log(res, 'Potluck post is Successful!')
            })
            .catch(err => {
            console.log(err)
            });

        setNewPotluckInfo(initialPotluckInfo)
    }

    return(
        <FormContainer>
            <form onSubmit = {submitHandler}>
                <Inputs>
                    <label>Event Name: </label>
                    <input name = 'eventName'
                        value = {newPotluckInfo.eventName}
                        onChange = {changeHandler}/>
                </Inputs>
                <Inputs> 
                    <label>Location: </label>
                    <input name = 'location'
                        value = {newPotluckInfo.location}
                        onChange = {changeHandler}/> 
                </Inputs>
                <Inputs> 
                    <label>Date: </label>
                    <input name = 'date'
                        value = {newPotluckInfo.date}
                        onChange = {changeHandler}/>
                </Inputs>
                <Inputs> 
                    <label>Time: </label>
                    <input name = 'time'
                        value = {newPotluckInfo.time}
                        onChange = {changeHandler}/>
                </Inputs>              
                <Button>Submit</Button>        
            </form>
        </FormContainer>
    )
}