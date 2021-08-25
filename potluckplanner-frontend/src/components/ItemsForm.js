import React, {useState} from 'react'
import { v4 as uuid } from 'uuid';

const initialFormValues = {
     item:'', person: "", numOfGuests: ''
}
function ItemsForm(props) {

    const [itemForm, setItemForm] = useState(initialFormValues)

    const handleSubmit = (event) => {
            event.preventDefault()
            const newItem = {...itemForm, id: uuid() }
            props.addItem(newItem)
    }

    const handleChange = (evt) => {
            setItemForm({...itemForm, [evt.target.name]: evt.target.value})
    }
    return (
       <form onSubmit={handleSubmit}>
           <label htmlFor='item' >Food Item:</label>
           <input type='text' id='item' name='item' placeholder='food' value={itemForm.item} onChange={handleChange}/> 

           <label htmlFor='person' >Person:</label>
           <input type='text' id='person' name='person' placeholder='person' value={itemForm.person} onChange={handleChange}/> 

           <label htmlFor='numOfGuests' >Number of Guests:</label>
           <input type='text' id='numOfGuests' name='numOfGuests' placeholder='numOfGuests' value={itemForm.numOfGuests} onChange={handleChange}/> 
           <button>Add Food</button>
       </form>
    )
}

export default ItemsForm
