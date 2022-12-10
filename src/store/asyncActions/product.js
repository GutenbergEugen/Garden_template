import { load_products_action } from "../reducer/productReducer";

export const loadProduct = (id) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:3000/product/${id}`);
        const data = await response.json()

        console.log(data)

        dispatch(load_products_action(data));
    }
}