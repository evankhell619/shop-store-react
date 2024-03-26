import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Oops</h1>
      <h2 className="my-5 text-xl text-red-600">Error</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage
