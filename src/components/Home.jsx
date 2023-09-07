import { useGlobalContext } from '../context/AppContext'

const Home = () => {
  const {user} = useGlobalContext()
  return(
    <>
      <p>My Name is {user}</p>
    </>  
  )
}

export default Home;