import { getShoppingCart } from "../utilities/fakedb";

const carProductsLoader = async () => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();


    // if cart data in the database, you have to use async await
    const storedCart = getShoppingCart();
    const saveCart = [];


    console.log(storedCart);
    // step 1: get id
    for (const id in storedCart) {
        // step 2: get the product by using id
        const addedProduct = products.find(pd => pd.id === id);

        if (addedProduct) {
            // step 3: add quantity
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // step 4: add the added product to the savedCart
            saveCart.push(addedProduct);
        }
    }
    // if you need to send two things
    // option 1: return [products, saveCart]
    // option 2: return {products, saveCart}

    return saveCart;

}



export default carProductsLoader;