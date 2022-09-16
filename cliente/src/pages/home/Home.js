import React from 'react'
import logo from '../../logo.svg'
import './home.css'


export const Home = () => {
  return (
    <div className='home'>
      <h1 className='entrevista'>Entrevista</h1>
        <p className='descripcion'> 
            Hola, mi nombre es Jorge Huergo, este es mi
            proyecto para la entrevista como
            desarrollador front React.
        </p>

        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </div>
    </div>
  )
}
