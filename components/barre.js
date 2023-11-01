import React from 'react'
import whatsa from '@/public/whatsa.json'
import server from '@/public/server.json'
import tvan from '@/public/tvan.json'
import satisfaction from '@/public/satisfaction.json'
import setup from '@/public/setup.json'
import Lottie from "lottie-react"
import styles from './Barre.module.css'
import Link from 'next/link'

export const config = {
    unstable_runtimeJS: false
  };

function Barre() {
  return (
    <>
      <div className="container-fluid text-center text-white">
                <div className="row justify-content-center pb-5">
                      <div className="col-sm-12 col-md-4 col-lg-4 pt-2">
                        <div className={`justify-content-center align-items-center  text-center  ${styles.boitone}`}>
                              <Link href={''}  > <Lottie className={`mx-auto  ${styles.icone}`} loop={true} animationData={whatsa} /></Link>
                              <div className={` mt-3 ${styles.title}`}> Chat live 24/7 </div>
                              <p className={`mt-3 ${styles.soustitle}`}>Chat live 24/7. We are there for your support</p>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 pt-2">
                          <div className={`justify-content-center align-items-center  text-center  ${styles.boitone}`}>
                          <Link href={''}  > <Lottie className={`mx-auto  ${styles.icone}`} loop={true} animationData={server} /></Link>
                              <div className={`mt-3 ${styles.title}`}> EU-US Servers </div>
                              <p className={`mt-3 ${styles.soustitle}`}>We use the best EU and US servers to give you the best 4K-FHD experience.</p>
                          </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 pt-2">
                          <div className={`justify-content-center align-items-center  text-center  ${styles.boitone}`}>
                          <Link href={''}  > <Lottie className={`mx-auto  ${styles.icone}`} loop={true} animationData={tvan} /></Link>
                              <div className={`mt-3 ${styles.title}`}> +23000 Channels </div>
                              <p className={`mt-3 ${styles.soustitle}`}>Start browsing thousands of Live TV channels, Sports, movies & TV shows.</p>
                          </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 pt-2">
                          <div className={`justify-content-center align-items-center  text-center  ${styles.boitone}`}>
                          <Link href={''}  > <Lottie className={`mx-auto  ${styles.icone}`} loop={true} animationData={satisfaction} /></Link>
                              <div className={`mt-3 ${styles.title}`}> 100% Satisfaction </div>
                              <p className={`mt-3 ${styles.soustitle}`}>All our IPTV come with the best support to setup easily your device.</p>
                          </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 pt-2">
                          <div className={`justify-content-center align-items-center  text-center  ${styles.boitone}`}>
                          <Link href={''}  > <Lottie className={`mx-auto  ${styles.icone}`} loop={true} animationData={setup} /></Link>
                              <div className={`mt-3 ${styles.title}`}> Easy Setup </div>
                              <p className={`mt-3 ${styles.soustitle}`}>Compatible with PC, Android, IOS, Smart TV, Enigma2, Mag Box, VLC and more.</p>
                          </div>
                      </div>
                </div>
            </div>  
    </>
  )
}

export default Barre
