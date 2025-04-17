import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Section from './Components/Section';
import Electronics from './Components/Electronics';
import MensClothing from './Components/MensClothing';
import WomensClothing from './Components/WomensClothing';
import Jewellery from './Components/Jewellery';
import ProductDetails from './Components/ProdectDetails';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Store from './Components/Store';
import Cart from './Components/Cart'; // ✅ Add this import
import { CartProvider } from './Context/CartContext'; // ✅ Wrap app in CartProvider

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Section />} />
            <Route path="store" element={<Store />} />

            {/* Categories */}
            <Route path="jewelery" element={<Jewellery />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="men's clothing" element={<MensClothing />} />
            <Route path="women's clothing" element={<WomensClothing />} />

            {/* Product Details */}
            <Route path="product/:id" element={<ProductDetails />} />

            {/* Auth */}
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />

            {/* Cart */}
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
