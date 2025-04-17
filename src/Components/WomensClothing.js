import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function WomensClothing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/women\'s clothing')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    
      <div className="container py-5">
            {/* Back to Home Button */}
            <div className="mb-4">
              <Link to="/" className="btn btn-outline-secondary">
                ← Back to Home
              </Link>
            </div>
      <h2 className="mb-4 text-center">Women's Clothing</h2>
      <div className="row">
        {data.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                className="card-img-top p-3"
                alt={item.title}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{item.title}</h6>
                <p className="card-text text-success fw-bold">₹{item.price}</p>
                <p className="card-text mb-2">
                  ⭐ {item.rating.rate} ({item.rating.count} reviews)
                </p>
                <Link to={`/product/${item.id}`} className="btn btn-primary mt-auto">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WomensClothing;
