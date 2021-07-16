export default function makeRecipeDb({ Id, recCol }) {
    return Object.freeze({
        listAllRecipes,
        findRecById,
        deleteRecById  
    });
    async function listAllRecipes() {
        const recipeList = [];
        const snapshot = snapshotRecs();
        snapshot.forEach(rec => {recipeList.push(rec.data())});
        return recipeList;
    }
    async function findRecById({ id }) {
        let recipe
        const snapshot = snapshotRecById({ id });
        if (snapshot.empty) {
            return {};
        }
        snapshot.forEach(rec => {recipe = rec});
        return recipe;
    }
    async function deleteRecById({ id }) {
        const snapshot = snapshotRecById({ id });
        snapshot.forEach(rec => {rec.ref.delete()});
    }

    async function snapshotRecs() {
        return await recCol.get();
    }
    async function snapshotRecById({ id }) {
        return await recCol.where("id", "==", id).get();
    }
}