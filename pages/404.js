import React from 'react'
import Lottie from 'lottie-react'
import notfound from '@/public/notfound'

function Notfound() {
  return (
    <div>
        <div className='mx-auto w-75 h-75 mb-5'><Lottie loop={true} animationData={notfound}></Lottie></div>
        
    </div>
  )
}

export default Notfound
