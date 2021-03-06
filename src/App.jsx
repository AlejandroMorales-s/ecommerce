import React, {useEffect , useContext, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import {FaArrowCircleUp} from 'react-icons/fa';
//* Global Context
import { globalContext } from './components/globalContext/GlobalContext';
//* GET method
import { get } from './api';
//* Welcome
import Welcome from './views/Welcome';
//* Login - SignUp
import Login from './views/Login';
import SignUp from './views/SignUp';
//* Feed
import Feed from './views/Feed';
//* Address
import Addresses from './views/Addresses';
import AddAddress from './views/AddAddress';
//* My Account
import MyAccount from './views/MyAccount';
import MyData from './views/MyData';
import MyCards from './views/MyCards';
import AddCard from './views/AddCard';
//* Product Details
import Product from './views/Product';
//* Wishlist
import Wishlist from './views/Wishlist';
//* Buy Product
import BuyNowTemplate from './components/buyProduct/BuyNowTemplate';
//* History
import History from './views/History';
//* Orders
import Orders from './views/Orders';
//* Shopping cart
import ShoppingCart from './views/ShoppingCart';
//* Not Found
import NotFound from './views/NotFound';
import ProductsFiltered from './views/ProductsFiltered';
import AddProduct from './views/AddProduct';
import BuyCartTemplate from './components/buyCart/BuyCartTemplate';

function App() {

  const {setUser} = useContext(globalContext);

  const [showBtn, setShowBtn] = useState(false);

  window.addEventListener('scroll', () => window.scrollY >= window.innerHeight / 2 ? setShowBtn(true) : setShowBtn(false));

    const scroll = () => {
      window.scrollTo({
          top:0,
          left:0,
          behavior:"smooth"
      });
    };

    useEffect( () => {
        get('/api/auth/validate')
      .then(({user}) => {
          setUser({type:'LOGIN', user: user});
      })
      .catch(err => {
        //console.log(err);
      });
    }, [setUser]);


  return (
    <>
      <Routes>
        {/* Login - Sign Up */}
        <Route path="/" element={<Welcome/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        {/* Feed */}
        <Route path="/feed" element={<Feed/>} />
        {/* Products Filtered */}
        <Route path="/search-products" element={<ProductsFiltered/>} />
        {/* Address */}
        <Route path="/account/my-addresses" element={<Addresses/>} />
        <Route path="/account/my-addresses/add-address" element={<AddAddress/>} />
        {/* My Account */}
        <Route path="/account" element={<MyAccount/>} />
        <Route path="/account/my-data" element={<MyData/>} />
        {/* My Cards */}
        <Route path="/account/my-cards" element={<MyCards/>} />
        <Route path="/account/add-card" element={<AddCard/>} />
        {/* Wishlist */}
        <Route path="/account/my-wishlist" element={<Wishlist/>} />
        {/* History */}
        <Route path="/account/history" element={<History/>} />
        {/* Orders */}
        <Route path="/account/orders" element={<Orders/>} />
        {/* Shopping cart */}
        <Route path="/account/shopping-cart" element={<ShoppingCart/>} />
        {/* Product Details */}
        <Route path="/product-details/:idParams" element={<Product/>} />
        {/* Buy Product */}
        <Route path="/:id/buy-product" element={<BuyNowTemplate/>} />
        {/* Buy Product */}
        <Route path="/buy-cart" element={<BuyCartTemplate/>} />
        {/* Add Product */}
        <Route path="/add-product" element={<AddProduct/>} />
        {/* Not Found */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
      {showBtn && 
        <FaArrowCircleUp onClick={scroll} className='sticky z-50 shadow-shadow rounded-full text-primary dark:text-primary-light h-[50px] w-[50px] bottom-2 left-[95.5%] cursor-pointer' />
      }
    </>
  );
}

export default App;
