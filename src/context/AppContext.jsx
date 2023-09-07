/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { dark, light } from '../utils/theme'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({children}) => {
  const [user, setUser] = useState('Keshab')
  const [theme, setTheme] = useState('light')

  const toggleTheme = (theme) => {
    setTheme(theme)
  }

  const login = (user) => {
    setUser(user)
  }

  const logout = () => {
    setUser('')
  }

  const themeData = theme === 'light' ? light : dark
  
  return <GlobalContext.Provider value={{theme, toggleTheme, themeData, user, login, logout}}>
    {children}
  </GlobalContext.Provider>
}

export default AppContext