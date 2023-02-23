import url from "./url";
import { redirect } from "react-router-dom";

const generateRecipeObject = async (request) => {
    const formData = await request.formData()

    return {
        name: formData.get("name"),
        ingredients: formData.get("ingredients"),
        directions: formData.get("directions")
    }
}

export const CreateAction = async ({request}) => {
    const newRecipe = await generateRecipeObject(request)

    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRecipe)
    })

    return redirect("/")
}

export const UpdateAction = async ({request, params}) => {
    const updatedRecipe = await generateRecipeObject(request)

    await fetch(url + params.id + "/", {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedRecipe)
    })

    return redirect("/")
}

export const DeleteAction = async ({params}) => {
    await fetch(url + params.id + "/", {
        method: "delete"
    })

    return redirect("/")
}