import React from 'react'
import { NavLink } from 'react-router-dom'

function LinkButton(props) {
    return (
        <NavLink to={props.address} style={{fontSize:"1.2rem", color:"white", textDecoration:"none"}}>
            {props.name}
        </NavLink>
    )
}

export default LinkButton;
