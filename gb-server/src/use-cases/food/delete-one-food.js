export default function makeDeleteOneFood({ findFoodById, deleteFoodById, BadRequestError, NotFoundError}) {
    return async function deleteOneFood({ id } = {}) {
        if (!id) {
            throw new BadRequestError("Must supply a food id.");
        } 
        if (await findFoodById({ id })) {
            await deleteFoodById({ id });
        } else {
            throw new NotFoundError("Food not found.");
        }
        return "Food successfully deleted.";
    }
}