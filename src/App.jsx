import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import ToggleTheme from './components/ToggleTheme'
import { useGlobalContext } from './context/AppContext'

function App() {
  const {theme, themeData, user} = useGlobalContext();

  return (
    <div className='app' style={ themeData }>
      {user ? (
        <>
          <NavBar />
          <Home />
        </>
      ) : (
        <Login />
      )}
      <h3>theme: {theme}</h3>
      <ToggleTheme />
    </div>
  )
}

export default App
