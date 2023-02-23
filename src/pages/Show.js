import { Link, useLoaderData } from "react-router-dom"

const Show = (props) => {
    const recipe = useLoaderData()

    return (
        <div>
            <h1>{recipe.name}</h1>
            <h3>Ingredients</h3>
            <p>{recipe.ingredients}</p>
            <h3>Directions</h3>
            <p>{recipe.directions}</p>

            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default Show