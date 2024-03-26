import React from 'react'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import { FormRegis } from '../components/Fragments/FormRegis'

const RegisPage = () => {
  return (
    <AuthLayouts title="Register" type="regis">
      <FormRegis />
    </AuthLayouts>
  )
}

export default RegisPage
