import { createContext, useReducer, useContext } from 'react'

import userDataReducer from './userDataReducer'

const Context = createContext()

function ContextProvider ({ children }) {
  const initialState = {}
  const [state, dispatch] = useReducer(userDataReducer, initialState)
  const value = { state, dispatch }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

function useAppContext () {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('customUseContext must be used within a ContextProvider')
  }
  return context
}

export { ContextProvider, useAppContext }
