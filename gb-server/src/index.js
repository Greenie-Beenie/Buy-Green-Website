import express from "express";
import bodyParser from "body-parser";
import { getFood, postFood, deleteFood } from "./controllers/food";
import { getRecipes, postRecipe, deleteRecipe } from "./controllers/recipe";
import makeCallback from "./express-callback";

const app = express();
app.use(express.json());
app.use((_, res, next) => {
    res.set({ Tk: "!" });
    next();
});

routeController(app, "food", getFood, postFood, deleteFood);
routeController(app, "recipe", getRecipes, postRecipe, deleteRecipe);

app.listen(3000, () => {
    console.log("Server is listening on port 3000.")
});

export default app;

function routeController({ app, collection, getDoc,/* putDoc,*/ postDoc, deleteDoc }) {
    app.get(`${apiRoot}/${collection}`, makeCallback(getDoc));
    //app.put(`${apiRoot}/${collection}/:id`, makeCallback(putDoc));
    app.post(`${apiRoot}/${collection}`, makeCallback(postDoc));
    app.delete(`${apiRoot}/${collection}/:id`, makeCallback(deleteDoc));
}