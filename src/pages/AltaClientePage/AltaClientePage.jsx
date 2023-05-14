import React from 'react'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/Title/Title'
import AltaCliente from '../../components/AltaCliente/AltaCiente'

export default function AltaClientePage() {
  return (
    <Layout>
        <div>
            <Title>Alta de Cliente</Title>
            <AltaCliente />
        </div>
    </Layout>
  )
}