import { useLoaderData, Link } from "react-router-dom"

const Index = (props) => {
    const recipes = useLoaderData()
    
    return <>
        <div>
            <div>
                {recipes.map(recipe => (
                    <div key={recipe.id}>
                        <Link to={`/post/${recipe.id}`}>
                            <h2>{recipe.name}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default Index