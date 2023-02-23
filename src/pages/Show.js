import { Form, Link, useLoaderData } from "react-router-dom"

const Show = (props) => {
    const recipe = useLoaderData()

    return (
        <div>
            <h1>{recipe.name}</h1>
            <h3>Ingredients</h3>
            <p>{recipe.ingredients}</p>
            <h3>Directions</h3>
            <p>{recipe.directions}</p>

            <div>
                <h2>Update this Recipe</h2>
                <Form action={`/update/${recipe.id}`} method="post">
                <input type="text" name="name" placeholder="name" defaultValue={recipe.name}/>
                <input type="text" name="ingredients" placeholder="ingredients" defaultValue={recipe.ingredients}/>
                <input type="text" name="directions" placeholder="directions" defaultValue={recipe.directions}/>
                <button>Update Recipe</button>
                </Form>
            </div>

            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default Show