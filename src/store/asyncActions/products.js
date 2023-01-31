import { loadProducts } from "../reducer/productReducer";

export const load_products = (id) => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${id}`)
        .then(resp => resp.json())
        .then(json => {
            const payload = json.map(el => ({
                ...el,
                hide: false
            }))
            dispatch(loadProducts(payload))
        })
    } 
}

;

// ### /products/all   - ссылка на все продукты
