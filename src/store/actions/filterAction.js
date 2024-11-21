export const setFilterByCategory = filter => {
    return {
        type: "SET_FILTER_BY_CAT",
        filter
    }
}

export const setFilterToSort = filter => {
    return {
        type: "SET_FILTER_TO_SORT",
        filter
    }
}


export const clearFilter = () => {
    return {
        type: "CLEAR_FILTER"
    }
}