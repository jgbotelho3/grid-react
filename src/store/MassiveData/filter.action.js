export function listAllItems() {
    return{
        type: 'LIST_ALL'
    }
}

export function selectProductsByName (productName) {
    return{
        type: 'LIST_BY_PRODUCT',
        payload: productName
    }
}
