import NavBar from './Components/NavBar';
import Products from './Components/Products';
import {BrowserRouter , Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes> 
      <Route path="/"element={<Products/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}
export default App;
