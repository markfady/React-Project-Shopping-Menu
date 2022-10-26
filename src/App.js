import NavBar from './Components/NavBar';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import {BrowserRouter , Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes> 
      <Route path="/"element={<Products/>} />
      <Route path='/products/:productId' element={<ProductDetails/>} />
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}
export default App;
