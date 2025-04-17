import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'; // ✅ Import cart context

function Header() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext); // ✅ Access cart items

  // ✅ Calculate total quantity
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) {
      alert(`Search for: ${query}`);
    }
  };

  return (
    <>
      <header className="bg-dark text-light py-2 shadow-sm">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          {/* Logo */}
          <h5 className="mb-0 fw-bold">SR Ecommerce 🛒</h5>

          {/* Search Form */}
          <form className="d-flex flex-grow-1 gap-1" onSubmit={handleSearch} style={{ maxWidth: '300px' }}>
            <input
              type="text"
              name="search"
              className="form-control form-control-sm"
              placeholder="Search..."
              style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
            />
            <button
              type="submit"
              className="btn btn-sm btn-outline-light"
              style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
            >
              🔍
            </button>
          </form>

          {/* Navigation Buttons */}
          <nav className="d-flex gap-1">
            <Link to="/" className="btn btn-sm btn-outline-light">🏠Home</Link>
            <Link to="/store" className="btn btn-sm btn-outline-light">🛍️Store</Link>
            <Link to="/cart" className="btn btn-sm btn-outline-light position-relative">
              🛒 Cart
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/login" className="btn btn-sm btn-outline-light">🔐 Login</Link>
            <Link to="/logout" className="btn btn-sm btn-light text-dark">🚪Logout</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
