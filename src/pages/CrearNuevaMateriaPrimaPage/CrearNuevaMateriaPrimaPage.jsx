import React from 'react'
import NuevaMateriaPrima from '../../components/NuevaMateriaPrima/NuevaMateriaPrima'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/Title/Title'

function CrearNuevaMateriaPrimaPage() {
  return (
    <Layout area='prod'>
        <div>
            <Title text='Crear Nueva Materia Prima'></Title>
            <NuevaMateriaPrima></NuevaMateriaPrima>
        </div>
    </Layout>
  )
}

export default CrearNuevaMateriaPrimaPage