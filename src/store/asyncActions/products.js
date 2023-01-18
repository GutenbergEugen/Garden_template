import { load_products_action } from "../reducer/productReducer";




export const loadProducts = (id) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:3333/categories/${id}`);
        const data = await response.json()
        console.log('asyncAction:', data);
        const payload = data

        console.log('productAction:', payload)

        dispatch(load_products_action(payload));
    }
}

// ### /products/all   - ссылка на все продукты
