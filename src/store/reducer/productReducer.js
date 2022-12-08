const default_state = [];

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export const load_products_action = (payload) => ({type: LOAD_PRODUCTS, payload})

export const productReducer = (state = default_state, action) => {
    if(action.type === LOAD_PRODUCTS){
        return[...action.payload]
    }else{
        return state
    }
}