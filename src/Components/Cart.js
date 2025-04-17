import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="container my-4">
      <h4>🛒 Your Cart</h4>
      <table className="table table-bordered table-sm">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr><td colSpan="5" className="text-center">Cart is empty</td></tr>
          ) : (
            cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                    className="form-control form-control-sm"
                    style={{ width: "60px" }}
                  />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
