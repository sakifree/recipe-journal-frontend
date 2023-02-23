import { Form } from "react-router-dom"

const Create = (props) => {
    return (
        <div>
            <h2>Add A Recipe</h2>
            <Form action="/create" method="post">
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="ingredients" placeholder="ingredients"/>
                <input type="text" name="directions" placeholder="directions"/>
                <button>Create New Recipe</button>
            </Form>
        </div>
    )
}

export default Create