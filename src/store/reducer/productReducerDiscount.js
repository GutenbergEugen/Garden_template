const default_state = [];

export const LOAD_PRODUCTS_DISCOUNT = 'LOAD_PRODUCTS_DISCOUNT';

export const load_products_discount_action = (payload) => ({type: LOAD_PRODUCTS_DISCOUNT, payload})

export const productReducerDiscount = (state = default_state, action) => {
    if(action.type === LOAD_PRODUCTS_DISCOUNT){
        return action.payload
    }else{
        return state
    }
}



