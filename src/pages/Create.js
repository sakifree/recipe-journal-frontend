import React from "react"
import { Form } from "react-router-dom"

const Create = (props) => {
    return (
        <div className="create-form">
            <h2>Add A Recipe</h2>
            <Form action="/create" method="post">
                <input type="text" name="name" placeholder="name"/>
                <textarea rows="5" columns="33" name="ingredients" placeholder="ingredients"/>
                <textarea rows="5" columns="33" name="directions" placeholder="directions"/>
                <button>Create New Recipe</button>
            </Form>
        </div>
    )
}

export default Create