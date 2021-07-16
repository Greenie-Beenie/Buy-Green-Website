import admin from "firebase-admin";
import makeFoodDb from "./food-db";
import makeRecipeDb from "./recipe-db";
import Id from "../entities/id";

admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

const db = admin.firestore();

export async function accessCollection({ collection }) {
    return db.collection(collection);
}

const foodDb = makeFoodDb({ Id, accessCollection({ collection="food" }) });
const recipeDb = makeRecipeDb({ Id, accessCollection({ collection="recipe" }) });

const dbs = Object.freeze({
    foodDb,
    recipeDb
});
export default dbs;
export { foodDb, recipeDb};