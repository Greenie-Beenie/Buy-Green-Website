export default function makeDeleteOneFood({ foodDb, BadRequestError, NotFoundError}) {
    return async function deleteOneFood({ id } = {}) {
        if (!id) {
            throw new BadRequestError("Must supply a food id.");
        } 
        if (await foodDb.findFoodById({ id })) {
            await foodDb.deleteFoodById({ id });
        } else {
            throw new NotFoundError("Food not found.");
        }
        return "Food successfully deleted.";
    }
}