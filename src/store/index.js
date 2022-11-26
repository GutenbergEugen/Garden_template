import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { categorieReducer } from './reducer/categorieReducer';

const rootReducer = combineReducers({
    categorie: categorieReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));