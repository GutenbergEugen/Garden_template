import { Routes, Route } from 'react-router-dom';
import Navbar from "../Navbar";
import HomePage from "../../pages/HomePage";
import CategoriesPage from "../../pages/CategoriesPage";
import BasketPage from "../../pages/BasketPage";
import Contacts from "../Contacts";
import '../../style.css'



function App() {

 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home/*" element={<HomePage />}/>
        <Route path="/categories" element={<CategoriesPage />}/>
        <Route path="/basket" element={<BasketPage />}/>
      </Routes>
      <Contacts />
    </div>
  );
}

export default App;
