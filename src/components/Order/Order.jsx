import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

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

    useEffect(() =>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id
        for(const id in storedCart){
            // step 2: get the product by using id
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the savedCart
                savedCart.push(addedProduct);
            }
            console.log(addedProduct);
            // step 3: get quantity of the product
            


        }
        // step 5: set to setCart
        setCart(savedCart);
    },[products])

    const handleAddToCart = (product) => {
        // cart.push(product)
        const newCart =[...cart,product];
        // if product doesn't exist in the cart, then the quantity 1
        // if exist update quantity by 1
        setCart(newCart);
        addToDb(product.id)


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
            <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Order;