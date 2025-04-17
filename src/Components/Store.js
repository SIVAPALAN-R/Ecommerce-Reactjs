// src/Components/Store.js
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'; // ✅ Import CartContext

function Store() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); // ✅ Access addToCart

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🛍️ All Products</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top p-3"
                style={{ height: '250px', objectFit: 'contain' }}
                alt={product.title}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{product.title.slice(0, 40)}...</h6>
                <p className="text-success fw-bold">₹{product.price}</p>
                <div className="d-flex justify-content-between mt-auto">
                  <Link to={`/product/${product.id}`} className="btn btn-dark btn-sm">
                    View Details
                  </Link>
                  <button
                    onClick={() => addToCart(product)}
                    className="btn btn-primary btn-sm"
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-outline-primary fw-bold">
          ⬅️ Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Store;
