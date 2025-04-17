import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // ✅ Access CartContext

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error('Error fetching product:', err));
  }, [id]);

  if (!product) {
    return <div className="text-center my-5">Loading product details...</div>;
  }

  return (
    <div className="container py-5">
      <div className="mb-4 d-flex justify-content-between">
        <Link to="/" className="btn btn-outline-secondary">
          ← Back to Home
        </Link>
        <button onClick={() => navigate('/store')} className="btn btn-primary">
          🛍️ View All Products
        </button>
      </div>

      <div className="row">
        {/* Product Image */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>

        {/* Product Info */}
        <div className="col-md-7">
          <h3>{product.title}</h3>
          <p className="text-muted text-capitalize">{product.category}</p>
          <h4 className="text-success">₹{product.price}</h4>
          <p>{product.description}</p>
          <p>⭐ {product.rating.rate} ({product.rating.count} reviews)</p>

          {/* ✅ Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="btn btn-dark me-2"
          >
            🛒 Add to Cart
          </button>

          <button className="btn btn-outline-warning">🔥 Special Offer: 10% OFF Today!</button>
        </div>
      </div>

      {/* Offers Section */}
      <div className="mt-5">
        <h5>🎉 Extra Offers for You:</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">✅ Free Shipping on orders over ₹999</li>
          <li className="list-group-item">✅ Buy 2 Get 1 Free on selected items</li>
          <li className="list-group-item">✅ ₹100 cashback on your first purchase</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetails;
