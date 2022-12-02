import { Routes, Route } from 'react-router-dom';
import Navbar from "../Navbar";
import HomePage from "../../pages/HomePage";
import CategoriesPage from "../../pages/CategoriesPage";
import BasketPage from "../../pages/BasketPage";
import '../../style.css'
import Footer from '../Footer';



function App() {

 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/categories" element={<CategoriesPage />}/>
        <Route path="/basket" element={<BasketPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
