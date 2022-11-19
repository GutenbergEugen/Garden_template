import Contacts from "../Contacts";
import Navbar from "../Navbar";
import '../../style.css'
import SeasonSale from "../SeasonSale";
import Discount from "../Discount";
import { Routes, Route } from 'react-router-dom';
import CategoriesPage from "../../pages/CategoriesPage";
import CategorieCard from "../CategorieCard";
import CategoriesMain from "../CategoriesMain";
import { getCategories } from '../../requests/request'



function App() {

  getCategories();


  return (
    <div>
      <Navbar />
      <SeasonSale />
      <CategoriesMain />
      <Routes>
        <Route path="/categories" element={<CategoriesPage />}/>
      </Routes>
      
      <Discount />
      <Contacts />
    </div>
  );
}

export default App;
