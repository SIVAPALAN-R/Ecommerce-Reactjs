import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ele from './Assets/Electronics.jpg';
import jell from './Assets/jewellary.jpg';
import mens from './Assets/menscloth.jpg';
import womens from './Assets/womenscoth.jpg';
import logo from './Assets/logo.png'; // Make sure this path is correct

function Section() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  const getImage = (category) => {
    switch (category) {
      case 'electronics':
        return ele;
      case 'jewelery':
        return jell;
      case "men's clothing":
        return mens;
      case "women's clothing":
        return womens;
      default:
        return ele;
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {data.map((v, i) => (
          <Link to={`/${v}`} key={i} className="text-decoration-none text-dark">
            <div className="card" style={{ width: '16rem' }}>
              <div className="card-body text-center">
                <img
                  src={getImage(v)}
                  alt={v}
                  style={{ width: '150px', height: '100px', objectFit: 'cover' }}
                />
                <h5 className="card-title mt-3 text-capitalize">{v}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* All Products Button below cards */}
      <div className="mt-5 text-center">
        <Link to="/store" className="btn btn-warning fw-bold">
          🛍️ All Products
        </Link>
      </div>

      {/* About Section with Logo */}
      <div className="mt-5">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <img
              src={logo}
              alt="SR Ecommerce Logo"
              style={{ width: '60px', height: '60px' }}
              className="mb-3"
            />
            <h5 className="card-title fw-bold">📦 About SR Ecommerce</h5>
            <p className="card-text">
              SR Ecommerce is a modern and responsive shopping platform built with React.
              It features category browsing, product details, and a seamless cart experience using Context API.
              Shop with ease and explore a wide range of products at your fingertips!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
