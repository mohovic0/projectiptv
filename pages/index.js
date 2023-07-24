import Head from 'next/head'
import styles from './Home.module.css'
import Barre from '@/components/barre'
import BackImageHome from '@/components/backImageHome'
import Card from '@/components/card'
import Sportmovie from '@/components/sportmovie'
import Forme from '@/components/forme'
import Chatwhatsap from '@/components/chatwhatsap'



export default function Home() {
  return (
    <>
      <Head>
        <title>ipTv Infinity - Best IPTV Subscription Service Provider</title>
        <meta name="description" content="ipTv Infinity is the best on the planet, 
              we always strive hard for perfection and your satisfaction. We give you
               the stability and reliability of the service. Get the next GEN+ IPTV." />
        <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="ipTv Infinity - Best IPTV Subscription Service Provider"/>
        <meta property="og:description" content="ipTv Infinity is the best on the planet, 
              we always strive hard for perfection and your satisfaction. We give you
               the stability and reliability of the service. Get the next GEN+ IPTV."/>
        <meta property="og:url" content="https://"/>
        <meta property="og:site_name" content="IPTV-Infinity"/>
        <meta property="og:image" content="https://"/>
      </Head>

     
      <section>
        <div className={`row align-items-center ${styles.imageback}`}>
          <BackImageHome/>
        </div>
      </section>

      <section className={`${styles.section2}`}>
        <Barre/>
      </section>

      <section className={`${styles.section3}`}>

          <h1 className='fs-2 fw-bold text-center pt-5 mb-5'>THANK YOU FOR CHOOSING INFINITY IPTV</h1>
          <div className='container-fluid d-block  d-xs-block  d-md-block d-sm-block d-lg-flex justify-content-lg-evenly flex-lg-wrap'>

              <div className={` mb-5 ${styles.divcard}`}><Card  mois = '3' price='35'/></div>
              <div className={` mb-5 ${styles.divcard}`}><Card mois = '6' price='35'/></div>
              <div className={` mb-5 ${styles.divcard}`}><Card mois = '12' price='35'/></div>
                        
          </div>
        
      </section>

      <section className={`${styles.section4}`}>
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
