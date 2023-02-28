import React from "react"
import { Form } from "react-router-dom"

const Create = (props) => {
    return (
        <div className="create-form">
            <h2><b>Add A Recipe</b></h2>
            <Form action="/create" method="post">
                <div className="create-form-container">
                    <legend>Name</legend>
                    <input type="text" name="name" placeholder="name" className="input-group input-group-sm"/>
                    <br/>
                    <legend>Ingredients</legend>
                    <textarea rows="5" columns="33" name="ingredients" placeholder="ingredients" className="input-group input-group-sm"/>
                    <br/>
                    <legend>Directions</legend>
                    <textarea rows="5" columns="33" name="directions" placeholder="directions" className="input-group input-group-sm"/>
                    <button className="btn btn-success">Create New Recipe</button>
                </div>
            </Form>
        </div>
    )
}

export default Create