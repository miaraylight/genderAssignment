

export const userReducer = (state=[], action) => {
    if (action.type === 'ADD') {
        return action.payload
    }else{
        return state
    }
}