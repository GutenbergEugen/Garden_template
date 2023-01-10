import { load_products_action } from "../reducer/productReducer";



// export const loadProducts = async dispatch => {
//     const response = await fetch(`http://localhost:3333/products/all`);
//     const data = await response.json()
// // console.log(data)
//     const payload = data.map(({id, title, price, discont_price, categoryId })=>({
//         id, title, 
//         price: +price, 
//         discont_price: +discont_price, 
//         categoryId
//     }));
//     dispatch(load_products_action(payload))
// }

export const loadProducts = (id) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:3333/categories/${id}`);
        const data = await response.json()
        console.log('asyncAction:', data);
        const payload = data.map(({id, title, price, discont_price, description, categoryId, image })=>({
            id, 
            title, 
            price: +price, 
            discont_price: +discont_price, 
            description,
            categoryId,
            image
        }));

        console.log('productAction:', payload)

        dispatch(load_products_action(payload));
    }
}

// ### /products/all   - ссылка на все продукты
