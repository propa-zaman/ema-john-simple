import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import './Order.css';

const Order = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))


    },[])

    const handleAddToCart = (product) => {
        const newCart =[...cart,product];
        setCart(newCart);


    }

    return (
        <div className='order-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}>
                        
                    </Product>)
                }

            </div>

            <div className="cart-container">
                <h2>Order summary</h2>
                <p>Selected Iteams: {cart.length}</p>

            </div>
        </div>
    );
};

export default Order;