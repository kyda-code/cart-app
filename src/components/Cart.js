import React, {useEffect, useState}   from "react";
import CartItem from "./CartItem";
import { getItemsInCart } from "../services/cartService";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const items = await getItemsInCart();
                setCartItems(items);
            } catch (error)     {
                console.error('Error fetching cart items:', error);
            }
        };
        fetchCartItems();
    }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
        {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
        ))}
    </div>
  );
}

export default Cart;
