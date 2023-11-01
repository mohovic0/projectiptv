import React from 'react'
import Lottie from "lottie-react"
import sportMovie from '@/public/sportMovie'
import familyKids from '@/public/familyKids'
import leader from '@/public/leaderss'
import styles from './Sportmovie.module.css'

export const config = {
  unstable_runtimeJS: false
};


function Sportmovie() {
  return (
    <div className='container text-white'>

        <div className='row'>
                <div className='col-12 col-lg-6'>
                    <div className={`pt-3 text-center ${styles.title}`}> Sports – Movies – Series </div>
                    <p className={`mt-3 text-center ${styles.soustitle}`}>With iptv-streaming you can watch what you want, whenever you want, the biggest events in sports, the best movies and TV series.</p>
                    <Lottie className={`mx-auto  `} loop={true} animationData={sportMovie} />
                </div>
                <div className='col-12 col-lg-6'>
                    <Lottie className={`mx-auto  `} loop={true} animationData={familyKids} />
                    <div className={`mt-3 text-center ${styles.title}`}> Family And Kids </div>
                    <p className={`mt-3 text-center ${styles.soustitle}`}>With iptv-streaming there’s something for everyone in your home. you can enjoy watching kid-friendly shows and family movies with your Kids.</p>
                </div>
        </div>

        <div className='row'>
                    <Lottie className={`mx-auto  ${styles.icone}`} loop={true} animationData={leader} />
                    <div className={`mt-3 text-center ${styles.title}`}> Leader For IPTV Service For Over 7 Years</div>
                    <p className={`py-3 text-center ${styles.soustitle}`}>We’ve helped thousands of clients to get the best TV experience with our IPTV service, you can watch live TV & VOD at home or on-the-go — wherever you are, anytime, on your favorite devices.</p>

        </div>
      
    </div>
  )
}

export default Sportmovie
