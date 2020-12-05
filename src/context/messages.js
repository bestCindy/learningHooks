import React, { useContext } from 'react';
import { AppContext } from "./testContext";

function Messages() {
    const { username } = useContext(AppContext);

    return (
        <div>
            Mesaages page:  {username}
        </div>
    )
}

export default Messages
