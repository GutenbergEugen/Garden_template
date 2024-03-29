import { Routes, Route } from 'react-router-dom';
import HomePage from "../../pages/HomePage";
import CategoriesPage from "../../pages/CategoriesPage";
import BasketPage from "../../pages/BasketPage";
import '../../style.css'
import NotFound from '../../pages/NotFound';
import ProductDescription from '../../pages/ProductDescription';
import ProductsContainer from '../ProductsContainer';
import Layout from '../Layout';
import StocksPage from '../../pages/StocksPage';
import ContactsPage from '../../pages/ContactsPage';
import DiscountMessagePage from '../../pages/DiscountMessagePage';
import ProductsPage from '../../pages/ProductsPage';




function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />}/>
          <Route path="categories" element={<CategoriesPage />}/>
          <Route path="catalog" element={<ProductsPage />}/>
          <Route path="categories/:categorie_id" element={<ProductsContainer />}/>
          <Route path="products/:product_id" element={<ProductDescription />}/>
          <Route path="basket" element={<BasketPage />}/>
          <Route path="stock" element={<StocksPage />}/>
          <Route path="contacts" element={<ContactsPage/>}/>
          <Route path="discount_message" element={<DiscountMessagePage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
