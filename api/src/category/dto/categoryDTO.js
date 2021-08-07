exports.categoryDto = (category) => {
    return {
        UUID: category.UUID,
        name: category.Name,
    };
}