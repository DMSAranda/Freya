// useSelectedUser.js
import { useState } from 'react';

export const useSelectedUser = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const selectUser = (user) => {
        setSelectedUser(user);
    };

    const clearUser = () => {
        setSelectedUser(null);
    };

    return {
        selectedUser,
        selectUser,
        clearUser
    };
};
