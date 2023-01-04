const read_local = () => JSON.parse(localStorage.getItem('basket')) ?? [];
const write_local = (state) => localStorage.setItem('basket', JSON.stringify(state));

const default_state = read_local();

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const INCR_COUNT = 'INCR_COUNT';
export const DECR_COUNT = 'DECR_COUNT';
export const CLEAR_BASKET = 'CLEAR_BASKET';

// export const add_to_basket_action = ( id, title, price, discont_price ) => {
//     return{
//         type: ADD_TO_BASKET,
//         payload: {id, title, price, discont_price}
//     }
// }

export const add_to_basket_action = ( payload ) => {
    return{
        type: ADD_TO_BASKET,
        payload
    }
}

export const clear_basket_action = () => ({type: CLEAR_BASKET})

export const increment_count_action = id => ({
    type: INCR_COUNT,
    payload: id
})

export const decrement_count_action = id => ({
    type: DECR_COUNT,
    payload: id
})

const checkProduct = (state, product) => {
    const productInState = state.find(({id}) => id === product.id);
    if(productInState){
        productInState.count++;
        return[...state]
    }else{
        return [...state, {...product, count: 1}]
    }
}

export const basketReducer = (state = default_state, action) => {
    if (action.type === ADD_TO_BASKET){
        const new_state = checkProduct(state, action.payload);
        write_local(new_state);
        return new_state;
    }else if(action.type === INCR_COUNT){
        state.find(({id}) => id === action.payload).count++
        write_local(state);
        return [...state]
    }else if(action.type === DECR_COUNT){
        const target = state.find(({id}) => id === action.payload);
        if(target.count === 1){
            state = state.filter(({id}) => id !== action.payload);
        }else {
            state.find(({id}) => id === action.payload).count--
        }
        write_local(state);
        return [...state]
    }else if (action.type === CLEAR_BASKET){
        write_local([]);
        return [];
    }else {
        return state
    }
}

