import React, {useContext} from 'react';
import { AppContext } from "./testContext";

function NavBar() {
    const { username } = useContext(AppContext);

    return (
        <div>
            NavBar Page!  {username}
        </div>
    )
}

export default NavBar
