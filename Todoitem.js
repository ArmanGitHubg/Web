import React from "react";


function TodoItem(props) {
    return(
        <div className='todo-item'>
            <div>
            <input 
                //onClick= {props.handleChange}
                type = "checkbox" 
                checked={props.item.available}
                onChange={(event) =>props.handleChange(props.item.id)}
                 />            
            
                <p>item: {props.item.description}</p>
                <p>price: {props.item.price}</p>

            </div>

            
        </div>
    )
}
export default TodoItem;
