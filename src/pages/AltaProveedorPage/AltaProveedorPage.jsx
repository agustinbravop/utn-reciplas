import React from 'react'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/Title/Title'
import AltaProveedor from '../../components/AltaProveedor/AltaProveedor'

export default function AltaProveedorPage() {
  return (
    <Layout area='ventas'>
        <div>
            <Title>Alta de Proveedor</Title>
            <AltaProveedor />
        </div>
    </Layout>
  )
}