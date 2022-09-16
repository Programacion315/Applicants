import React from 'react'

export const Postulante = ({postulante}) => {
  return (
    <div className='container'>
      <h1>Holis</h1>
      <div className='row'>
        <ul className='list-group'> 
          <li className='list-group-item'>{postulante.idpostulante}</li>
          <li className='list-group-item'>{postulante.nombre}</li>
          <li className='list-group-item'>{postulante.apellido}</li>
          <li className='list-group-item'>{postulante.edad}</li>
          <li className='list-group-item'>{postulante.sexo}</li>
        </ul>
      </div>
    </div>
  )
}
