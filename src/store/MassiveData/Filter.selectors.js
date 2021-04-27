export const selectAllItems = (state) => state.data

export const test = (value) => (state) => state.data.filter((item) => item.product === value)