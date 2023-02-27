import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <span>Recipe Journal</span>
            </Link>
            <Link to="create">
                <span>New</span>
            </Link>

        </div>
    )
}

export default Nav