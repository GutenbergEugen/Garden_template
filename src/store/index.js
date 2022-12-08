import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { categorieReducer } from './reducer/categorieReducer';
import { productReducer } from './reducer/productReducer';

const rootReducer = combineReducers({
    categorie: categorieReducer,
    products: productReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));