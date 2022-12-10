import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { categorieReducer } from './reducer/categorieReducer';
import { productReducer } from './reducer/productReducer';
import { singleProductReducer } from './reducer/singleProductReducer';

const rootReducer = combineReducers({
    categorie: categorieReducer,
    products: productReducer,
    singleProduct: singleProductReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));