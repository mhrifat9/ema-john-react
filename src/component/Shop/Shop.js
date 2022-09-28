import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect( () =>{
        // fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
       
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
        // .then(data => console.log(data))
    },[])

    const HandleAddToCart = (product) =>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='product-section'>

            <div className='item-section'>
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    HandleAddToCart = {HandleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart'>
                <h3 >Order Summary</h3>
                <p>Selected Items: {cart.length}</p>
            </div>            

        </div>
    )
};

export default Shop;