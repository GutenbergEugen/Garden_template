const default_state = [];

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export const load_categories_action = (payload) => ({type: LOAD_CATEGORIES, payload})


export const categorieReducer = (state = default_state, action ) => {
    if (action.type === LOAD_CATEGORIES){
        return action.payload
    }else {
        return state
    }
}

