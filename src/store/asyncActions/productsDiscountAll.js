import { load_products_discount_action } from "../reducer/productReducerDiscount"; 

export const loadProductsDiscount = () => {
    return async dispatch => {
        const response = await fetch(`http://localhost:3333/products/all`);
        const data = await response.json()
        const payload_discount = data.filter(({discont_price})=> discont_price !==0)

        dispatch(load_products_discount_action(payload_discount));
    }
  
}

// ### /products/all   - ссылка на все продукты
