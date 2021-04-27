import mock from '../../mocks/data_full.json'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = mock.data, action) {
    switch (action.type) {
        case 'LIST_ALL':
            return state

        case 'LIST_BY_PRODUCT':
            const result = state.filter((item) => item.product === action.payload)
            console.log(result)
            return result
        
        case 'LIST_BY_ORIGIN':
            return state.filter((item) => item.origin === action.payload)

        default:
           return state
    }
}