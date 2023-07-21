import React from 'react'
import Lottie from "lottie-react"
import sportMovie from '@/public/sportMovie'
import familyKids from '@/public/familyKids'
import leader from '@/public/leaderss'
import styles from './Sportmovie.module.css'

function Sportmovie() {
  return (
    <div className='container'>

        <div className='row'>
                <div className='col-12 col-lg-6'>
                    <h3 className="fs-2 fw-bold mt-3 text-center"> SPORTS – MOVIES – SERIES </h3>
                    <h5 className="fs-5 mt-3 text-center">With INFINITY IPTV you can watch what you want, whenever you want, the biggest events in sports, the best movies and TV series.</h5>
                    <Lottie className={`mx-auto  `} loop={true} animationData={sportMovie} />
                </div>
                <div className='col-12 col-lg-6'>
                    <Lottie className={`mx-auto  `} loop={true} animationData={familyKids} />
                    <h3 className="fs-2 fw-bold mt-3 text-center"> FAMILY AND KIDS </h3>
                    <h5 className="fs-5 mt-3 text-center">With INFINITY IPTV there’s something for everyone in your home. you can enjoy watching kid-friendly shows and family movies with your Kids.</h5>
                </div>
        </div>

        <div className='row'>
                    <Lottie className={`mx-auto  ${styles.icone}`} loop={true} animationData={leader} />
                    <h3 className="fs-2 fw-bold mt-3 text-center"> THE MARKET LEADER FOR IPTV SERVICE FOR OVER 7 YEARS</h3>
                    <h5 className="fs-5 py-3 text-center">We’ve helped thousands of clients to get the best TV experience with our IPTV service, you can watch live TV & VOD at home or on-the-go — wherever you are, anytime, on your favorite devices.</h5>

        </div>
      
    </div>
  )
}

export default Sportmovie
