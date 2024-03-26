import Button from '../Elements/Button/Button'
import { Link } from 'react-router-dom'
import InputForm from '../Elements/Input/InputForm'

export const FormRegis = () => {
  return (
    <div className="w-full max-w-xs">
      <form action="">
        <InputForm
          label="Email"
          type="email"
          placeholder="example@mail.com"
          name="email"
        />
        <InputForm
          label="Username"
          type="text"
          placeholder="username123"
          name="username"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="******"
          name="password"
        />
        <Button variant="bg-blue-500 w-full">Login</Button>
      </form>
    </div>
  )
}
