import { Link } from 'react-router-dom'
import Button from '../Elements/Button/Button'
import InputForm from '../Elements/Input/InputForm'
import { useEffect, useRef, useState } from 'react'
import { login } from '../../services/auth.service'

export const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState('')
  const handleLogin = (event) => {
    event.preventDefault()
    // localStorage.setItem('email', event.target.email.value)
    // localStorage.setItem('password', event.target.password.value)
    // window.location.href = '/products'
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res)
        window.location.href = '/products'
      } else {
        setLoginFailed(res.response.data)
      }
    })
  }
  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current.focus()
  }, [])
  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleLogin}>
        <InputForm
          label="Username"
          type="text"
          placeholder="John Lennon"
          name="username"
          ref={usernameRef}
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="******"
          name="password"
        />
        <Button variant="bg-blue-500 w-full" type="submit">
          Login
        </Button>
        {loginFailed && (
          <p className="text-red-500 text-center mt-5"> {loginFailed}</p>
        )}
      </form>
    </div>
  )
}
