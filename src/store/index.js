import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { basketReducer } from './reducer/basketReducer';
import { categorieReducer } from './reducer/categorieReducer';
import { productReducer } from './reducer/productReducer';
import { productReducerAll } from './reducer/productReducerAll';
import { singleProductReducer } from './reducer/singleProductReducer';

const rootReducer = combineReducers({
    categorie: categorieReducer,
    products: productReducer,
    singleProduct: singleProductReducer,
    basket: basketReducer,
    products_all: productReducerAll
})

export const store = createStore(rootReducer, applyMiddleware(thunk));