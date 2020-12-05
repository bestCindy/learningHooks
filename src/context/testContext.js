import React from 'react';
import Messages from "./messages";
import NavBar from "./navBar";

export const AppContext = React.createContext({});

export function TestContext() {
    return (
        <AppContext.Provider value={{
            username: "This is Cindy!"
        }}>
            <div>
                <NavBar />
                <Messages />
            </div>
        </AppContext.Provider>
    )
}

