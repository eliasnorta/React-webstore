import React from 'react';
import Product from "../../components/Products/Product";
import ProductBig from '../../components/Products/Product_Big';

function Home() {
  return <div>

    <div className="products-list-name-container">
      <p className="home__row products-list-name">Featured:</p>
    </div>

    <div className="home__row">
      <ProductBig
        id="285620"
        title="Product Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        price={1229}
        rating={5}
        image="/images/01_AppleiPadPro112021128Gt5G_grey.png"
      />
      <ProductBig
        id="873654"
        title="Product Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        price={897}
        rating={5}
        image="/images/7a800dc93ffa6a45af04c2b49a75a4af.png"
      />
    </div>
    
    <div className="products-list-name-container">
      <p className="home__row products-list-name">All Products: (6x)</p>
    </div>

    <div className="home__row">
      <Product
        id="134786"
        title="Product Title"
        price={10.00}
        rating={4}
        image="/images/battery-bank.png"
      />
      <Product
        id="349586"
        title="Product Title"
        price={150}
        rating={5}
        image="/images/Speaker.png"
      />
      <Product
        id="923456"
        title="Product Title"
        price={444}
        rating={3}
        image="/images/Television.png"
      />
    </div>
    <div className="home__row">
      <Product
        id="285643"
        title="Product Title"
        price={15.00}
        rating={5}
        image="/images/1966px-Rubik's_cube.png"
      />
      <Product
        id="982357"
        title="Product Title"
        price={1199}
        rating={5}
        image="/images/Canon-90d-18-135mm-02-550x550.png"
      />
      <Product
        id="394873"
        title="Product Title"
        price={24.90}
        rating={5}
        image="/images/Apple-USB-C-Charge-Cable-(1m).png"
      />
    </div>
  </div>;
}

export default Home;
