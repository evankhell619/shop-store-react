import React from 'react'
import Button from './Button'

export const Home = () => {
  return (
    <div className="flex justify-center bg-pink-500 min-h-screen items-center">
      <div className="flex gap-5">
        <Button>Holla</Button>
        <Button variant="bg-slate-700">Hello</Button>
        <Button variant="bg-slate-700"> Hello</Button>
      </div>
    </div>
  )
}
