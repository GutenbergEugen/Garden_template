import { load_products_all_action } from "../reducer/productReducerAll";
import { load_products_discount_action } from "../reducer/productReducerDiscount"; 
import { load_random_discount_action } from "../reducer/randomPromotionsReducer";


export const loadProductsAll = () => {
    return async dispatch => {
        const response = await fetch(`http://localhost:3333/products/all`);
        const data = await response.json()
        const payload = data
        // console.log('productAction:', data)
        dispatch(load_products_all_action(payload));
        const payload_discount = data.filter(prod => prod.discont_price > 0);
        
        dispatch(load_products_discount_action(payload_discount));
        dispatch(load_random_discount_action(payload_discount));
    }
}




// ### /products/all   - ссылка на все продукты
