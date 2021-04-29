export function listAllItems() {
    return{
        type: 'LIST_ALL'
    }
}

export function selectProducts (item, column) {
    return{
        type: 'LIST_ITEMS',
        payload: {
            item,
            column
        }
    }
}


