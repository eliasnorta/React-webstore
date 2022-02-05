import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return <header className="header">
    <div className="header__content">
      {/* left side stuff */}
      <div className="left__side">
        {/* Header logo */}
        <div className="Logo">
          <NavLink to="/" >
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="45px" height="50px"><polygon fill="#f8bbd0" points="44.313,23.993 24.687,44.993 3.687,23.993 24.687,2.993"/><polygon fill="#f48fb1" points="28.809,20.656 44.307,23.993 44.313,23.993 24.687,2.993 24.674,3.012"/><polygon fill="#f8bbd0" points="3.687,23.993 24.677,44.984 19.303,28.594"/><polygon fill="#9e9d24" points="37.56,31.219 24.687,44.993 24.677,44.984 24.685,45.007" opacity=".5"/><polygon fill="#ffcc80" points="37.56,31.219 44.307,23.993 28.809,20.656 31.513,32.191"/><polygon fill="#ce93d8" points="31.52,32.2 24.69,44.99 24.68,44.98 19.3,28.59 31.51,32.19"/><polygon fill="#ffd180" points="15.78,17.85 19.3,28.59 3.69,23.99"/><polygon fill="#ff9800" points="28.81,20.66 15.78,17.85 15.79,17.84 24.67,3.02"/><polygon fill="#ffb74d" points="19.303,28.594 31.513,32.191 28.809,20.656 15.78,17.85"/><polygon fill="#ba68c8" points="31.523,32.202 24.687,44.993 44.313,23.993"/><polygon fill="#ffe0b2" points="15.791,17.843 3.687,23.993 14.187,13.493 24.687,2.993"/></svg>
            <h1>Logo</h1>
          </NavLink>
        </div>
        {/* nav links */}
        <div className="header__nav">
          <nav>
            <ul>
              <li>
                <NavLink to="/categories">
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Right side stuff */}
      <div className="right__side">
        <div className="sign__in">
          <NavLink to="/sign-in">
            Sign In
          </NavLink>
        </div>
        <div className="shopping__cart">
          <NavLink to="cart">
            <img src="/images/icons8-shopping-cart-48.png" alt="cart"/>
            <p className="products-in-cart">0</p>
            <p className="cart-total-price">0,00€</p>
          </NavLink>
        </div>
      </div>

    </div>
  </header>
}

export default Header;
