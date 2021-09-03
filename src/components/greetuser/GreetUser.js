import React from 'react'
import './GreetUser.css'

export const GreetUser = (props) => {
    const showAlert = () => { alert("You've clicked me!") }
    return (
        <div className="greetuser">
            <h1 className="greetuser__header" onClick={() => showAlert()}>
                Welcome to my {props.name} It's {props.age} years old!
            </h1>
        </div>
    )
}
