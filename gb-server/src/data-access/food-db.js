export default function makeFoodDb ({ Id, foodCol }) {
    return Object.freeze({
        listAllFood,
        findFoodById,
        deleteFoodById
    });
    async function listAllFood() {
        const foodList = [];
        const snapshot = snapshotFood();
        snapshot.forEach(f => {recipeList.push(f.data())});
        return foodList;
    }
    async function findFoodById({ id }) {
        let food;
        const snapshot = snapshotFoodById({ id });
        if (snapshot.empty) {
            return {};
        }
        snapshot.forEach(f => {food = f});
        return food;
    }
    async function deleteFoodById({ id }) {
        const snapshot = snapshotFoodById({ id });
        snapshot.forEach(f => {f.ref.delete()});
    }

    async function snapshotFood() {
        return await foodCol.get();
    }
    async function snapshotFoodById ({ id }) {
        return await foodCol.where("id", "==", id).get();
    }
}