

export const loadCategories =  async dispatch => {
    const response = await fetch('http://localhost:3333/categories/all'); 
    const data = await response.json()
    const payload = data.map(({id, title})=>({
        id, title,
        categorie_img: "./media/inventory.png" 
    }));
    dispatch({type: 'LOAD_CATEGORIS', payload})
}



