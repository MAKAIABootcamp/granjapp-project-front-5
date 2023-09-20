import React from 'react'
import Clock from './clock/Clock'
import './StatusBar.scss'


function StatusBar() {
  return (
    <>
      <div className='statusBar-conteiner'>
        <Clock/>
        <div className='icons-statusBar-container'>
          <img src='src/assets/statusBar-icons/Signal.svg' alt="signal" />
          <img src='src/assets/statusBar-icons/Connection.svg' alt="connection" />
          <img src='src/assets/statusBar-icons/Battery.svg' alt="battery" />
        </div>

      </div>
        
    </>
  )
}

export default StatusBar