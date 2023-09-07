import Logout from './Logout'

import { useGlobalContext } from '../context/AppContext'
const navStyle = {
  top: '0px',
  maxWidth: '1500px',
  height: '30px',
  padding: '10px',
  border: "5px solid green"
}
const NavBar = () => {
  const {user, logout} = useGlobalContext()
  return (
    <div  style={navStyle}>
      <span>welcome {user}  </span>
      <Logout handleLogout={logout}/>
    </div>
  )
}

export default NavBar
