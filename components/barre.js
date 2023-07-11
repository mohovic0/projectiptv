import React from 'react'
import whatsa from '@/public/whatsa.json'
import server from '@/public/server.json'
import tvan from '@/public/tvan.json'
import satisfaction from '@/public/satisfaction.json'
import setup from '@/public/setup.json'
import Lottie from "lottie-react"
import styles from './Barre.module.css'
import Link from 'next/link'

function Barre() {
  return (
    <>
      <div className="container-fluid text-center">
                <div className="row justify-content-center pt-5">
                      <div className="col-sm-12 col-md-4 col-lg-4 pt-5">
                        <div className="justify-content-center align-items-center text-center">
                              <Link href={''}  > <Lottie className={`mx-auto  ${styles.icone}`} loop={true} animationData={whatsa} /></Link>
                              <h3 className="fs-2 fw-bold mt-3"> Chat live 24/7 </h3>
                              <h5 className="fs-5 mt-3">Chat live 24/7. We are there for your support</h5>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 pt-5">
                          <div className="justify-content-center align-items-center">
                          <Link href={''}  > <Lottie className={`mx-auto  ${styles.icone}`} loop={true} animationData={server} /></Link>
                              <h3 className="fs-2 fw-bold mt-3"> EU-US Servers </h3>
                              <h5 className="fs-5 mt-3">We use the best EU and US servers to give you the best 4K-FHD experience.</h5>
                          </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 pt-5">
                          <div className="justify-content-center align-items-center">
                          <Link href={''}  > <Lottie className={`mx-auto  ${styles.icone}`} loop={true} animationData={tvan} /></Link>
                              <h3 className="fs-2 fw-bold mt-3"> +16000 Channels </h3>
                              <h5 className="fs-5 mt-3">Start browsing thousands of Live TV channels, Sports, movies & TV shows.</h5>
                          </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 pt-5">
                          <div className="justify-content-center align-items-center">
                          <Link href={''}  > <Lottie className={`mx-auto  ${styles.icone}`} loop={true} animationData={satisfaction} /></Link>
                              <h3 className="fs-2 fw-bold mt-3"> 100% Satisfaction </h3>
                              <h5 className="fs-5 mt-3">All our IPTV come with the best support to setup easily your device.</h5>
                          </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 pt-5">
                          <div className="justify-content-center align-items-center">
                          <Link href={''}  > <Lottie className={`mx-auto  ${styles.icone}`} loop={true} animationData={setup} /></Link>
                              <h3 className="fs-2 fw-bold mt-3"> Easy Setup </h3>
                              <h5 className="fs-5 mt-3">Compatible with PC, Android, IOS, Smart TV, Enigma2, Mag Box, VLC and more.</h5>
                          </div>
                      </div>
                </div>
            </div>  
    </>
  )
}

export default Barre
