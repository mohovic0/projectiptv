import React from 'react'
import sportMovie from '@/public/tvan.png'
import familyKids from '@/public/familyKids.png'
import leader from '@/public/leaderss.png'
import styles from './Sportmovie.module.css'
import Image from 'next/image'


function Sportmovie() {
  return (
    <div className='container text-white'>

        <div className='row'>
                <div className='col-12 col-lg-6 text-center'>
                    <div className={`pt-3 text-center ${styles.title}`}> Sports – Movies – Series </div>
                    <p className={`mt-3 text-center ${styles.soustitle}`}>With iptv-streaming you can watch what you want, whenever you want, the biggest events in sports, the best movies and TV series.</p>
                    {/* <Lottie className={`mx-auto  `} loop={false} animationData={sportMovie} /> */}
                    <Image src={sportMovie} alt='4k iptv' width={300} height={300}/>

                </div>
                <div className='col-12 col-lg-6 text-center'>
                    {/* <Lottie className={`mx-auto  `} loop={false} animationData={familyKids} /> */}
                    <Image src={familyKids} alt='4k iptv' width={300} height={300}/>
                    <div className={`mt-3 text-center ${styles.title}`}> Family And Kids </div>
                    <p className={`mt-3 text-center ${styles.soustitle}`}>With iptv-streaming there’s something for everyone in your home. you can enjoy watching kid-friendly shows and family movies with your Kids.</p>
                </div>
        </div>

        <div className='row'>
                

                <div className='col-12 col-lg-6 text-center'>
                    
                    <div className={`pt-3 text-center ${styles.title}`}> Leader For IPTV Service For Over 7 Years </div>
                    <p className={`mt-3 text-center ${styles.soustitle}`}>We’ve helped thousands of clients to get the best TV experience with our IPTV service, you can watch live TV & VOD at home or on-the-go — wherever you are, anytime, on your favorite devices.</p>
                    {/* <Lottie className={`mx-auto  `} loop={false} animationData={sportMovie} /> */}
                    <Image src={leader} alt='4k iptv service' width={300} height={300}/>
                </div>
                
                   

        </div>
      
    </div>
  )
}

export default Sportmovie
