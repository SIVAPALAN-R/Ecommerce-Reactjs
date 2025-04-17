import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // import Link

function Jewellary() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
   
      <div className="container py-5">
            {/* Back to Home Button */}
            <div className="mb-4">
              <Link to="/" className="btn btn-outline-secondary">
                ← Back to Home
              </Link>
            </div>
      <h2 className="mb-4 text-center">Jewellery Collection</h2>
      <div className="row">
        {data.map((v) => (
          <div className="col-md-3 mb-4" key={v.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={v.image}
                className="card-img-top p-3"
                alt={v.title}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{v.title}</h6>
                <p className="card-text text-success fw-bold">₹{v.price}</p>
                <p className="card-text mb-2">
                  ⭐ {v.rating.rate} ({v.rating.count} reviews)
                </p>
                
                {/* View Details Link */}
                <Link to={`/product/${v.id}`} className="btn btn-primary mt-auto">
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

export default Jewellary;
