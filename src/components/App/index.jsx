import { Routes, Route } from 'react-router-dom';
import Navbar from "../Navbar";
import HomePage from "../../pages/HomePage";
import CategoriesPage from "../../pages/CategoriesPage";
import BasketPage from "../../pages/BasketPage";
import '../../style.css'
import Footer from '../Footer';
import ProductsPage from '../../pages/ProductsPage';
import NotFound from '../../pages/NotFound';
import ProductDescription from '../../pages/ProductDescription';



function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/categories" element={<CategoriesPage />}/>
        <Route path="/categories/:categorie_id" element={<ProductsPage />}/>
        <Route path="/products/:product_id" element={<ProductDescription />}/>
        <Route path="/basket" element={<BasketPage />}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
