import React from "react";
import { Link, NavLink, Redirect } from "react-router-dom/cjs/react-router-dom.min";


const Nav = () => {
    return (
        <nav>
            <NavLink exact to = "/dogs">Home</NavLink>
            <NavLink exact to = "/dogs/watson">Watson</NavLink>
            <NavLink exact to = "/dogs/red">Red</NavLink>
            <NavLink exact to= "/dogs/pugsley">Pugsley</NavLink>
            <Redirect to="/dogs" />
        </nav>
    )
}

export default Nav;