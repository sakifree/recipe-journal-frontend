import React from "react"
import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <span>Recipe Journal</span>
            </Link>
            <Link className="nav-link" to="create">
                <span>New</span>
            </Link>
        </nav>

    )
}

export default Nav