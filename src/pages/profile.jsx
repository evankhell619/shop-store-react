import React from 'react'
import { useLogin } from '../hooks/useLogin'

const ProfilePage = () => {
  const username = useLogin()
  return (
    <div>
      <h1>profle</h1>
      <h1>username : {username}</h1>
    </div>
  )
}

export default ProfilePage
