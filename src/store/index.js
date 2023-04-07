import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { basketReducer } from './reducer/basketReducer';
import { categorieReducer } from './reducer/categorieReducer';
import { productsReducer } from './reducer/productReducer';
import { productReducerAll } from './reducer/productReducerAll';
import { productReducerDiscount } from './reducer/productReducerDiscount';
import { promotionsRandomReducer } from './reducer/randomPromotionsReducer';
import { singleProductReducer } from './reducer/singleProductReducer';

const rootReducer = combineReducers({
    categorie: categorieReducer,
    products: productsReducer,
    singleProduct: singleProductReducer,
    basket: basketReducer,
    products_all: productReducerAll,
    products_Discount: productReducerDiscount,
    randomPromotions: promotionsRandomReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));