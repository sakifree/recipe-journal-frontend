import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import { IndexLoader, ShowLoader } from "./loaders";
import Create from "./pages/Create";
import Index from "./pages/Index";
import Show from "./pages/Show"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={IndexLoader}/>
            <Route path="post/:id" element={<Show/>} loader={ShowLoader}/>
            <Route path="create" element={<Create/>}/>
            <Route path="update/:id"/>
            <Route path="delete/:id"/>
        </Route>
    )
)

export default router