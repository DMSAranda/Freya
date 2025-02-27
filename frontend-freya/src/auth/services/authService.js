/* eslint-disable no-useless-catch */
import axios from "axios";

export const loginUser = async({ username, password }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_BACKEND}/login`, { username, password });
        return response;
    } catch (error) {
        console.error('Login error:', error.response ? error.response.data : error.message);
        throw error; // Re-lanza el error para que pueda ser capturado en el componente
    }
};