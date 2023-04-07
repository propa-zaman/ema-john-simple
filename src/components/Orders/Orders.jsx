import React from 'react';
import Cart from '../Cart/Cart';

const Orders = () => {
    return (
        <div className='order-container'>
            <div className='products-container'>
                <h2>Order Review page</h2>

            </div>

            <div className='cart-container'>
                <Cart cart={[]}></Cart>

            </div>

        </div>
    );
};

export default Orders;