const default_state = [];

export const LOAD_PRODUCTS_ALL = 'LOAD_PRODUCTS_ALL';
const SORT_PRODUCTS_ALL = 'SORT_PRODUCTS_ALL';
const SEARCH_PRICE_ALL = 'SEARCH_PRICE_ALL';

let first_state = [];

export const load_products_all_action = (payload) => ({type: LOAD_PRODUCTS_ALL, payload})
export const sortProducts_all_action = payload => ({type: SORT_PRODUCTS_ALL, payload});
export const searchPrice_all_action = payload => ({type: SEARCH_PRICE_ALL, payload});

export const productReducerAll = (state = default_state, action) => {
    if(action.type === LOAD_PRODUCTS_ALL){
        first_state = action.payload;
        return action.payload
    }else if (action.type === SORT_PRODUCTS_ALL) {
        if (action.payload === 'default'){
            return first_state
        }else if(typeof state[0][action.payload] === 'string'){
            return [...state].sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
        }else{
            return [...state].sort ((a, b) => a[action.payload] -b[action.payload])
        } 
    } else if (action.type === SEARCH_PRICE_ALL){
        const { min_value, max_value } = action.payload;
        return state.map(el => {
            if(el.price >= min_value && el.price <= max_value){
                el.hide = false
            } else {
                el.hide = true
            }
            return el
        })
    } else {
        return state
    }
}


