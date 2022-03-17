import {Routes, Route} from 'react-router-dom'
import Catalog from './pages/Catalog';
import Main from './pages/Main';
import Product from './pages/Product';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </>
  );
}

export default App;
