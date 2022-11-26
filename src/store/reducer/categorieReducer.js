

const default_state = [];

export const categorieReducer = (state = default_state, action) => {
    if (action.type === 'LOAD_CATEGORIS'){
        return [...state, ...action.payload]
    }else {
        return state
    }
}