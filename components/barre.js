import React from 'react'
import whatsa from '@/public/whatsa.png'
import server from '@/public/server.png'
import tvan from '@/public/tvan.png'
import setup from '@/public/setup.png'
import satisfaction from '@/public/satisfaction.png'
import styles from './Barre.module.css'
import Image from 'next/image'

export const config = {
  unstable_runtimeJS: false
};

function Barre() {
  return (
    <>
      <div className="container-fluid text-center text-white">
                <div className="row justify-content-center pb-5">
                      <div className="col-sm-12 col-md-4 col-lg-4 pt-2">
                        <div className={` ${styles.boitone}`}>
                              {/* <Link href={''}  > <Lottie className={`mx-auto  ${styles.icone}`} loop={false} animationData={whatsa} /></Link>
                              <div className={` mt-3 ${styles.title}`}> Chat live 24/7 </div>
                              <p className={`mt-3 ${styles.soustitle}`}>Chat live 24/7. We are there for your support</p> */}
                              <Image src={whatsa} alt='iptv smart4k' width={100} height={100}/>
                              <div className={`${styles.title}`}> Chat live 24/7 </div>
                              <p className={`${styles.soustitle}`}>Chat live 24/7. We are there for your support</p>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 pt-2">
                          <div className={` ${styles.boitone}`}>
                          {/* <Link href={''}  > <Lottie className={`mx-auto  ${styles.icone}`} loop={false} animationData={server} /></Link> */}
                              <Image src={server} alt='iptv smart4k' width={120} height={120}/>
                              <div className={`${styles.title}`}> EU-US Servers </div>
                              <p className={`${styles.soustitle}`}>We use the best EU and US servers to give you the best 4K-FHD experience.</p>
                          </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 pt-2">
                          <div className={`${styles.boitone}`}>
                          {/* <Link href={''}  > <Lottie className={`mx-auto  ${styles.icone}`} loop={false} animationData={tvan} /></Link> */}
                              <Image src={tvan} alt='iptv smart4k' width={80} height={80}/>
                              <div className={`${styles.title}`}> +23000 Channels </div>
                              <p className={`${styles.soustitle}`}>Start browsing thousands of Live TV channels, Sports, movies & TV shows.</p>
                          </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 pt-2">
                          <div className={` ${styles.boitone}`}>
                          {/* <Link href={''}  > <Lottie className={`mx-auto  ${styles.icone}`} loop={false} animationData={satisfaction} /></Link> */}
                              <Image src={satisfaction} alt='iptv smart4k' width={120} height={120}/>
                              <div className={`${styles.title}`}> 100% Satisfaction </div>
                              <p className={`${styles.soustitle}`}>All our IPTV come with the best support to setup easily your device.</p>
                          </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 pt-2">
                          <div className={`${styles.boitone}`}>
                          {/* <Link href={''}  > <Lottie className={`mx-auto  ${styles.icone}`} loop={false} animationData={setup} /></Link> */}
                              <Image src={setup} alt='iptv smart4k' width={120} height={120}/>
                              <div className={`${styles.title}`}> Easy Setup </div>
                              <p className={`${styles.soustitle}`}>Compatible with PC, Android, IOS, Smart TV, Enigma2, Mag Box, VLC and more.</p>
                          </div>
                      </div>
                </div>
            </div>  
    </>
  )
}

export default Barre
