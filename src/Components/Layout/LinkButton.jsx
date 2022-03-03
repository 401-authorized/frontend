import React from 'react'
import { NavLink } from 'react-router-dom'
import { useMediaQuery } from '@mantine/hooks';

function LinkButton(props) {
  const matches = useMediaQuery("(min-width: 576px)");

    return (
        <NavLink to={props.address} style={{fontSize:"1.2rem", color:`${matches ? "white" : "black"}`, textDecoration:"none"}}>
            {props.name}
        </NavLink>
    )
}

export default LinkButton;
