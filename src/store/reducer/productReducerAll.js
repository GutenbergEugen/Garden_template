const default_state = [];

export const LOAD_PRODUCTS_ALL = 'LOAD_PRODUCTS_ALL';

export const load_products_all_action = (payload) => ({type: LOAD_PRODUCTS_ALL, payload})

export const productReducerAll = (state = default_state, action) => {
    if(action.type === LOAD_PRODUCTS_ALL){
        return action.payload
    }else{
        return state
    }
}



