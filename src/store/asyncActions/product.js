import { load_product_action } from "../reducer/singleProductReducer";

export const loadSingleProduct = (id) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:3333/products/${id}`);
        const data = await response.json()
        console.log('asyncAction:', data);
        const payload = data.map(({id, title, price, discont_price, description, categoryId, image })=>({
            id, title, 
            price: +price, 
            discont_price: +discont_price, 
            description,
            categoryId,
            image
        }));

        console.log('productAction:', payload)

        dispatch(load_product_action(payload));
    }
}

// ### /products/1     - ссылка на первый продукт