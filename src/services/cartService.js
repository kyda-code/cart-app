//Placeholder for cart service
import axios from 'axios';

//Contstant API URL
const API_URL = 'http://localhost:5056/api/ShoppingCart/items';

//Get all items in the cart
export const getItemsInCart = async () => {

    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error;
    }
};

export const addItemsToCart = async (item) => {
    try {
        const response = await axios.post(API_URL, item);
        return response.data;
    } catch (error) {
        console.error('Error adding item to cart', error);
        throw error;
    }
};

export const updateItemInCart = async (item) => {
    try {
        const response = await axios.put(`${API_URL}/${item.id}`, item);
        return response.data;
    } catch (error) {
        console.error('Error updating item in cart', error);
        throw error;
    }
};

export const removeItemFromCart = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error removing item from cart', error);
        throw error;
    }
};


