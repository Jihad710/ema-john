import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const {cart} = props;

    console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = totalPrice*7/100;

    const grandTotal = totalPrice + totalShipping + tax;

    
  

    return (
        <div className='cart'>
           <h3>Order summery</h3>
            <p>Selected Items :{cart.length}</p> 
            <p>Total Price : ${totalPrice}</p>
            <p>Shipping : ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h4>Grand Total : ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;