export const selectAllItems = (state) => state.data

export const getByProduct = (value) => (state) => state.data.filter((item) => item.product === value)

export const getByOrigin = (value) => (state) => state.data.filter((item) => item.origin === value)

