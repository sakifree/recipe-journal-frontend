## *Recipe Journal*
***
* **Description:** An application that allows users to track their favorite recipes. They will be able to read, create, update, and delete an entry.
* **Technologies/Methods Used:** React, ReactRouter, CSS, JavaScript/JSX, API, Netlify

### *Wireframes*
***
#### Component Structure

![Component Structure](https://i.imgur.com/rGUQCmU.png)

#### Site Design Mockup
![Index Page](https://i.imgur.com/hR5NXWY.png)
![Show Page](https://i.imgur.com/4NFojI3.png)
![Create Page](https://i.imgur.com/3nivyE4.png)

### *Routes*
***
| Route | Element | Loader | Action | Description |
| ----- | ------- | ------ | ------ | ----------- |
| / | INDEX | recipesLoader | | displays every recipe |
| /recipe/:id | SHOW | recipeLoader | | displays a single recipe |
| /recipe/create | CREATE | | createAction | creates a new recipe  |
| /recipe/update/:id |  | | updateAction | updates a specific recipe based on the ID |
| /recipe/delete/:id |  | | deleteAction | deletes a recipe entry |


#### *Deployed App*
***
[Live Site]()