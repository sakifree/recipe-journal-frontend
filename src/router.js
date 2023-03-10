import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { CreateAction, DeleteAction, UpdateAction } from "./actions";
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
            <Route path="create" element={<Create/>} action={CreateAction}/>
            <Route path="update/:id" action={UpdateAction}/>
            <Route path="delete/:id" action={DeleteAction}/>
        </Route>
    )
)

export default router