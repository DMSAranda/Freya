import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [selectedUser, setSelectedUser] = useState(null);

    const selectUser = (user) => {
        setSelectedUser(user);
    };

    const clearUser = () => {
        setSelectedUser(null);
    };

    return (
        <UserContext.Provider value={{ selectedUser, selectUser, clearUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};
