export const getCategories = (callbackFunc) => {
    fetch('http://localhost:3333/categories/all')
        .then(res => res.json())
        .then(json => callbackFunc(json))           
}