import { load_products_all_action } from "../reducer/productReducerAll";



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

export const loadProductsAll = () => {
    return async dispatch => {
        const response = await fetch(`http://localhost:3333/products/all`);
        const data = await response.json()
        const payload = data.map(({id, title, price, discont_price, description, categoryId, image })=>({
            id, 
            title, 
            price: +price, 
            discont_price: +discont_price, 
            description,
            categoryId,
            image
            
        }));

        dispatch(load_products_all_action(payload));
    }
}

// ### /products/all   - ссылка на все продукты
