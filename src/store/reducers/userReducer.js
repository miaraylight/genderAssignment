

export const userReducer = (state=[], action) => {
    if (action.type === 'ADD') {
        return [...state, action.payload]
    }else{
        return state
    }
}