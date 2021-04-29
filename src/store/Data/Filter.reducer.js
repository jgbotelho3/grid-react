import mock from '../../mocks/data_full.json'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = mock.data, action) {
    switch (action.type) {
        case 'LIST_ALL':
            return state

        case 'LIST_ITEMS':            
            return state.filter((item) => item[action.payload.column] === action.payload.item)
        
        default:
           return state
    }
}