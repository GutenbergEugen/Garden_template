import { load_categories_action } from "../reducer/categorieReducer";


export const loadCategories = () => {
    return async dispatch => {
        const response = await fetch('http://localhost:3333/categories/all');
        const data = await response.json()
        const payload = data.map(({id, title})=>({
            id, title,
            categorie_img: "./media/fertilizer.png" 
        }));
        console.log(payload)
        dispatch(load_categories_action(payload))
    }
};


// export const loadCategories =  async dispatch => {
//     const response = await fetch('http://localhost:3333/categories/all'); 
//     const data = await response.json()
//     const payload = data.map(({id, title})=>({
//         id, title,
//         categorie_img: "./media/fertilizer.png" 
//     }));
//     dispatch({type: 'LOAD_CATEGORIS', payload})
// }

// ### /categories/all - ссылка на все категории
// ### /categories/1   - ссылка на продукты из первой категории


