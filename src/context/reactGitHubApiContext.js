import { createContext, useReducer, useContext } from 'react'

import contextReducer from './contextReducer'

const Context = createContext()

function ContextProvider({children}) {
    const initialState = {}
    const [state, dispatch] = useReducer(contextReducer, initialState)
    const value = {state, dispatch}
    return <Context.Provider value={value}>{children}</Context.Provider>
}

function useCustomUseContext() {
    const context = useContext(Context)
    if (context === undefined) {
      throw new Error('customUseContext must be used within a ContextProvider')
    }
    return context
}

export { ContextProvider, useCustomUseContext }