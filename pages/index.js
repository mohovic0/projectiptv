import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Barre from '@/components/barre'
import BackImageHome from '@/components/backImageHome'
import Card from '@/components/card'
import Sportmovie from '@/components/sportmovie'
import Lottie from "lottie-react"
import whatsa from '@/public/whatsappp'
import Link from 'next/link'
import Forme from '@/components/forme'
import Chatwhatsap from '@/components/chatwhatsap'







export default function Home() {
  return (
    <>
      <Head>
        <title>Tv Infinity</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
      </Head>

     
      <section>
        <div className={`row align-items-center ${styles.imageback}`}>
          <BackImageHome/>
        </div>
      </section>

      <section>
        <Barre/>
      </section>

      <section className={`mt-5   ${styles.section3}`}>

          <h1 className='fs-2 fw-bold text-center mt-5 mb-5'>THANK YOU FOR CHOOSING INFINITY IPTV</h1>
          <div className='container-fluid d-block  d-xs-block  d-md-block d-sm-block d-lg-flex justify-content-lg-evenly flex-lg-wrap'>

              <div className={` mb-5 ${styles.divcard}`}><Card  mois = '3' price='35'/></div>
              <div className={` mb-5 ${styles.divcard}`}><Card mois = '3' price='35'/></div>
              <div className={` mb-5 ${styles.divcard}`}><Card mois = '3' price='35'/></div>
                        
          </div>
        
      </section>

      <section>
        <Sportmovie/>
      </section>

      <section className='container'>
        <div className='row align-items-center'>
                <div className="col-12 col-lg-6 align-items-center">
                      <Chatwhatsap/>
                          
                </div>
                <div className='col-12 col-lg-6 align-items-center'>
                    
                    <h1 className="fs-1 fw-bold mt-3 text-center mb-4"> Ready to get started? </h1>
                    <Forme/>
                    
                </div>
          </div>
      </section>


         
    </>
  )
}
