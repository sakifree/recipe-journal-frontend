import React from "react"
import { Form, Link, useLoaderData } from "react-router-dom"

const Show = (props) => {
    const recipe = useLoaderData()

    return (
        <div>
            <h1 className="show-title">{recipe.name}</h1>
            <h3>Ingredients</h3>
            <p>{recipe.ingredients}</p>
            <h3>Directions</h3>
            <p>{recipe.directions}</p>

            <div>
                <h2>Update this Recipe</h2>
                <Form action={`/update/${recipe.id}`} method="post">
                <input type="text" name="name" placeholder="name" defaultValue={recipe.name} className="input-group input-group-sm"/>
                <textarea rows="5" columns="33" name="ingredients" placeholder="ingredients" defaultValue={recipe.ingredients} className="input-group input-group-sm"/>
                <textarea rows="5" columns="33" name="directions" placeholder="directions" defaultValue={recipe.directions} className="input-group input-group-sm"/>
                <button className="btn btn-warning">Update Recipe</button>
                </Form>
                <br/>
                <Form action={`/delete/${recipe.id}`} method="post">
                    <button className="delete-button btn btn-danger">Delete Recipe</button>
                </Form>
            </div>
        </div>
    )
}

export default Show