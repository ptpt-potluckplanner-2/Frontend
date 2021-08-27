import React, { useState, useEffect }from "react";

import ItemsForm from './ItemsForm'
function Items(props) {

    const [items, setItems] = useState([])



    const deleteItems = (id) => {
        setItems(items.filter(item => {
            return item.id !== id
        }))

    };

    const addItem = (item) => {
        setItems([...items, item])
    }

    return(
        <div>
            <ItemsForm addItem={addItem}/>
            {items.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>Food: {item.item}</h2>
                        <h4>Person: {item.person }</h4>
                        <h5>Number of guest: {item.numOfGuests}</h5>
                        <button onClick={e => {
                            deleteItems(item.id)}}> Delete Food Item </button>
                    </div>    
                )
            })}

        </div>
    )
}

export default Items; 