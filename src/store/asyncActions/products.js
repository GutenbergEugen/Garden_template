import { load_products_action } from "../reducer/productReducer";



export const loadProducts = async dispatch => {
    const response = await fetch(`http://localhost:3333/products/all`);
    const data = await response.json()
console.log(data)
    const payload = data.map(({id, title, price, discont_price, categoryId })=>({
        id, title, price, discont_price,categoryId
    }));
    dispatch(load_products_action(payload))
}