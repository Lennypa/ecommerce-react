import axios from 'axios';

const URL = 'https://dummyjson.com';

export const apiBuilder = {

    getProduct: async (id) => {
        try {
            const { data } = await axios.get(`${URL}/products/${id}`);
            return data;
        } catch (error) {
            console.error(error);
            return error;
        }
    },

    getProducts: async () => {
        try {
            const { data } = await axios.get(`${URL}/products`);
            return data
        } catch (error) {
            console.error(error);
            return error;
        }
    },

    getProductsByCategory : async (categoryName) => {
        try {
            const { data } = await axios.get(`${URL}/products/category/${categoryName}`)
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

}