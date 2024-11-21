export const setFilter = filter => {
    return {
        type: "SET_FILTER",
        filter
    }
}

export const clearFilter = () => {
    return {
        type: "CLEAR_FILTER"
    }
}