import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ cartCount = 0 }) => {
  return (
    <header className="header">
      <div className="header-row">
        <h1>ComponentCorner</h1>

        <Link to="/cart" className="cart-container" aria-label="Shopping cart">
          <span className="cart-icon" aria-hidden="true">
            🛒
          </span>
          <span className="cart-badge">{cartCount}</span>
        </Link>
      </div>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    </header>
  );
};

export default Header;