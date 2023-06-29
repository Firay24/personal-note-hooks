import React from 'react'
import picNotFound from '../../public/images/404.png'

function NotFoundPage() {
  return (
    <div className='not-found__page'>
        <img src={picNotFound} alt="" />
    </div>
  )
}

export default NotFoundPage