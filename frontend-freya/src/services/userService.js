/* eslint-disable no-useless-catch */
import usersApi from "../apis/usersApi";

const BASE_URL = '';

export const findAll = async() => {
    try {
        const response = await usersApi.get(BASE_URL);
        return response;
    } catch (error) {
        //console.error(error);
        throw error;
    }
}

export const findAllPages = async(page = 0) => {
    try {
        const response = await usersApi.get(`${BASE_URL}/page/${page}`);
        return response;
    } catch (error) {
        //console.error(error);
        throw error;
    }
}

export const save = async ({ username, department, password, admin }) => {
    try {
        return await usersApi.post(BASE_URL, {
            username,
            department,
            password,
            admin,
        });
    } catch (error) {
        throw error;
    }
}

export const update = async({ id, username, department, admin }) => {
    try {
        return await usersApi.put(`${BASE_URL}/${id}`, {
            username,
            department,
            admin,
        });
    } catch (error) {
        throw error;
    }
}

export const remove = async (id) => {
    try {
        await usersApi.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }
}