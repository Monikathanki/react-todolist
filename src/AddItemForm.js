import React from 'react';

function AddItmeForm(props) {
    return (
        <form onSubmit = {props.addItem}>
            <input
                type="text"
                name="list"
                placeholder = "enter your list"
                
            />
            <button type="submit">
                Add 
            </button>
        </form>
    )
    
}

export default AddItmeForm;