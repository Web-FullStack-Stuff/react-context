import { useState } from 'react'
import { useGlobalContext } from '../context/AppContext'
const loginStyle = {
  padding: '20px'
}
const Login = () => {
  const [name, setName] = useState('')
  
  const {login} = useGlobalContext()

  const submit = (e) => {
    e.preventDefault();
    login(name)
  }
  return (
    <div style={loginStyle}>
      <form onSubmit={submit}>
        <label htmlFor='name'>Name: </label>
        <input
          id='name'
          name='name'
          type='text'
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login
