import React from 'react'
import { Link } from 'react-router-dom'

function setupButton() {
  return (
    <div className='flex justify-center items-center'>  
        <Link to="/setup">
            <button className='py-3 px-6 bg-accent'>
                <h1 className='text-2xl font-bold text-text'> Setup Your Profile </h1>
            </button>
        </Link> 
    </div>
    
  )
}

export default setupButton;