import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'


const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        // local storage theke o remove kortese
        removeFromDb(id);
    }

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='order-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
                }

            </div>

            <div className='cart-container'>
                <Cart cart={cart}
                handleClearCart={handleClearCart}>
                    <Link to="/checkout">
                    <button className='btn-review-order'>Proceed Checkout</button>
                </Link>
                </Cart>

            </div>

        </div>
    );
};

export default Orders;