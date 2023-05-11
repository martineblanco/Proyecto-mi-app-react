import React from 'react'
import { Spinner } from 'react-bootstrap'
import './Loader.css'

const Loader = () => {
  return (
    <div>
      <br /> 
      <Spinner className='spinner' />
    </div>
  )
}

export default Loader