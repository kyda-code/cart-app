import React from "react";
import { removeItemFromCart } from '../services/cartService';

function CartItem({ item }) {
    return (
        <div className="cart-item">
            <div className="cart-item__details">
                <div className="cart-item__details__title">{item.productName}</div>
                <div className="cart-item__details__price">Price: ${item.price}</div>
                <div className="cart-item__details__quantity">Quantity: {item.quantity}</div>
                <button className="cart-item__details__remove-button" onClick={handleRemove}>Remove</button>
            </div>
        </div>
    );
}

export default CartItem;
