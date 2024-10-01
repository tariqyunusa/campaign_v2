import React, {createContext, useContext, useRef} from 'react';
import gsap from 'gsap';


const AppContext = createContext()

export const AppProvider = ({children}) => {
    const refs = useRef([])
    const gsapInstance = gsap

    const splitWords = (phrase) => {
        let body = []
        phrase.split(" ").forEach((word, i ) => {
          const letters = splitLetters(word)
          body.push(<p key={word + "_" + i}>{letters}</p>)
          // console.log("the words", letters);
          
        })
        return body
      }

      const splitLetters = (word) => {
        let letters = []
        word.split("").forEach((letter, i) => {
          letters.push(<span key={letter + "_" + i} ref={el => refs.current.push(el)}>{letter}</span>)
        })
        return letters
      }
    

    return(
        <AppContext.Provider value={{gsapInstance, refs, splitWords, splitLetters}}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => useContext(AppContext)
