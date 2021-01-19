import React from "react";

function ContactCard(props) {
    console.log(props)
    return (
        <div className="contact-card">
            
            <h3>{props.contact.name}</h3>        
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.Email}</p>
            <img src={props.contact.imgUrl} />
            <a href={props.contact.join}>link to google</a>
        </div>
    )
}
export default ContactCard 