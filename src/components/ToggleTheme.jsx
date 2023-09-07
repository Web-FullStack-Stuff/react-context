import { useGlobalContext } from '../context/AppContext'

const ToggleTheme = () => {
  const {theme, toggleTheme} = useGlobalContext();
  const changeTheme = () => {
    let newTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme(newTheme)
  }
  return (
    <>
      <button onClick={changeTheme}>Toggle</button>
    </>  
  )
}

export default ToggleTheme;