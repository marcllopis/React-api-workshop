import React from 'react'


const Header = props => (
    <div>
        <h2>{props.title}</h2>
        <button onClick={props.action}>Click to change title</button>
    </div>
)

export default Header