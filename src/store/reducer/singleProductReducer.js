const default_state = {};

export const LOAD_PRODUCT = 'LOAD_PRODUCT';
export const RESET_PRODUCT = 'RESET_PRODUCT';

export const load_products_action = (payload) => ({type: LOAD_PRODUCT, payload})
export const reset_product_action = (payload) => ({type: RESET_PRODUCT, payload})


export const singleProductReducer = (state = default_state, action) => {
    if (action.type === LOAD_PRODUCT){
        return action.payload
    }else if (action.type === RESET_PRODUCT){
        return default_state
    }else {
        return state
    }
}



