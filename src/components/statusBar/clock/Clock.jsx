import React, { useEffect, useState } from 'react'
import './Clock.scss'

function Clock() {
    const [hora, setHora] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setHora(new Date());
      }, 1000); // Actualiza la hora cada segundo
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className='clock'>
        <i>{hora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</i> 
      </div>
    );
  }

export default Clock