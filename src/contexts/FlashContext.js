import React, { useState, useContext } from "react"

export const FlashContext = React.createContext()
export const FlashUpdateContext = React.createContext(() => {}) // this is a function

export function useFlash() {
    return useContext(FlashContext)
}

export function useFlashUpdate() {
    return useContext(FlashUpdateContext)
}

export function FlashProvider({ children }) {
    const [flashes, setFlashes] = useState([
            {message:"Hello", variant:"info"},
            {message:"Goodbye", variant:"dark"}
        ])

    function setDefaultFlashes(){
        console.log("SETTING DEFAULT FLASHES...")
        setFlashes(prevFlashes => [
            {message:"Default 1", variant:"primary"},
            {message:"Default 2", variant:"success"}
        ])
    }

    return (
        <FlashContext.Provider value={flashes}>
            <FlashUpdateContext.Provider value={setDefaultFlashes}>
                {children}
            </FlashUpdateContext.Provider>
        </FlashContext.Provider>
    )
}