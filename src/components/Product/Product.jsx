import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const {name,img,seller,quantity,price,ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;

   

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Star</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart 
                 <FontAwesomeIcon icon= {faShoppingCart} />
            </button>
        </div>
    );
};
import './Product.css';


export default Product;