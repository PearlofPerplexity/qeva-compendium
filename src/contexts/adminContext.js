/* 
This context  houses the variables used for character creation to allow it to be shared between the character builder and the character sheet 
*/
import { useState, createContext } from "react";

const AdminContext = createContext([{}, () => { }]);

const AdminProvider = ({ children }) => {

    const [admin, setAdmin] = useState(false);

    //Any children within this provider can access this context
    return (
        <AdminContext.Provider value={[admin, setAdmin]}>
            {children}
        </AdminContext.Provider>
    );
};

export { AdminContext, AdminProvider };