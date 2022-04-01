import React from 'react'
import loader from '../../assets/loader_animation.gif'

const Loader = () => {
  return (
    <div className='custom_loader d-flex justify-content-center align-items-center'>
        <img alt='loader' src={loader}/>
    </div>
  )
}

export default Loader