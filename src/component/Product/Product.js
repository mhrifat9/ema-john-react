import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {HandleAddToCart} = props;
    const {name, img, price, ratings, manufacturer} = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='price'>Price: ${price}</p>
            <p className='manufacturer'><small>Manufacturer: {manufacturer}</small></p>
            <p className='ratings'><small>Rating: {ratings} star</small></p>
            </div>
            <button onClick={() => HandleAddToCart(props.product)} className='cart-btn'>
                <p>Add to Cart</p> 
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;