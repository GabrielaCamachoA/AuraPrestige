import React, { createContext } from "react";
import { useState } from "react";
export const context = createContext();

function ModoOscuro({children}) {
    const [oscuro, setOscuro] = useState(false);
    return <context.Provider value={{oscuro, setOscuro}}>
        {children}
    </context.Provider>
}

export default ModoOscuro