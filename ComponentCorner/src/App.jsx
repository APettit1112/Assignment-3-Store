// Commented out previous code in Apps.jsx 
/* import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
*/ 

// Router Configuration: BrowserRouter wraps the app, Routes defines the page navigation,
//  and each Route maps a URL path to a page component. The app keeps cart state here so HomePage,
//  ProductsPage, ProductDetailsPage, and CartPage can all access the same product/cart data while 
// the Header and Footer stay visible across all pages.
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: 'https://placehold.co/600x400',
      description: 'Premium noise-cancelling headphones with 30-hour battery life',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 249.99,
      image: 'https://placehold.co/600x400',
      description: 'Fitness tracker with heart rate monitor and GPS',
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 79.99,
      image: 'https://placehold.co/600x400',
      description: 'Portable waterproof speaker with 360-degree sound',
    },
    {
      id: 4,
      name: 'Laptop Stand',
      price: 49.99,
      image: 'https://placehold.co/600x400',
      description: 'Ergonomic aluminum stand for laptops and tablets',
    },
    {
      id: 5,
      name: 'Webcam',
      price: 129.99,
      image: 'https://placehold.co/600x400',
      description: '4K webcam with auto-focus and noise reduction',
    },
    {
      id: 6,
      name: 'Mechanical Keyboard',
      price: 159.99,
      image: 'https://placehold.co/600x400',
      description: 'RGB backlit keyboard with custom switches',
    },
  ];

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header cartCount={cart.length} />

        <main className="page-shell">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/products"
              element={<ProductsPage products={products} addToCart={addToCart} />}
            />
            <Route
              path="/products/:productId"
              element={<ProductDetailsPage products={products} addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<CartPage products={cart} removeFromCart={removeFromCart} />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;