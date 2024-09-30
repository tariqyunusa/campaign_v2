import React, {createContext, useContext, useRef} from 'react';
import gsap from 'gsap';


const AppContext = createContext()

export const AppProvider = ({children}) => {
    const refs = useRef([])
    const gsapInstance = gsap
    

    return(
        <AppContext.Provider value={{gsapInstance, refs}}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => useContext(AppContext)
