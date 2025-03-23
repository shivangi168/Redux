import React, { useState } from "react";

const products = [
  { id: 1, name: "Apple Juice", price: 2.99, image: "https://via.placeholder.com/80", quantity: 2 },
//   { id: 2, name: "Grapes Juice", price: 3.19, image: "https://via.placeholder.com/80", quantity: 1 },
];

function HomePage() {
  const [cart, setCart] = useState(products);

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg" />
          <div className="flex-1 px-4">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-500">250ml</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 text-lg font-bold"
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>
            <span className="text-lg font-semibold">{item.quantity}</span>
            <button
              className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 text-lg font-bold"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
          </div>
          <p className="font-semibold text-lg">${item.price.toFixed(2)}</p>
          <button
            className="text-red-500 text-sm underline hover:text-red-700"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="flex justify-between items-center mt-4">
        <p className="font-semibold text-lg">Sub-Total ({cart.length} items)</p>
        <p className="text-2xl font-bold">${total}</p>
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
        Checkout
      </button>
    </div>
  );
}

export default HomePage;
