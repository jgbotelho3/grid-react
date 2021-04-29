export const selectAllItems = (state) => state.data

export const  getItem = (value, column) =>  (state) => state.data.filter((item) => item[column] === value)

