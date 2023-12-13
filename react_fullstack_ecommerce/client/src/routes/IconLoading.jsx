import React from 'react'
import './IconLoading.css'

const IconLoading = () => {
  return (
      <div className='position-relative'>
        <div className='position-absolute top-50 start-50 translate-middle'>
               <div className='loader'>
            <div className="cube">
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
    </div>
    </div>
        </div>

      
      </div>
   
  )
}

export default IconLoading