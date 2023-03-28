import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    let total =0;
    for(const product of cart){
        total = total + product.price;
    }

    return (
        <div className='cart'>
                <h2>Order summary</h2>
                <p>Selected Iteams: {cart.length}</p>
                <p>Total price: {total}</p>
                <p>Total shipping: </p>
                <p>Tax</p>
                <h6>Grand total: </h6>
        </div>
    );
};

export default Cart;