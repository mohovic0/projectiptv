import React from 'react'
import styles from '@/components/BackImageHome.module.css'
import Link from 'next/link'
import Typical from 'react-typical'

function BackImageHome() {
  return (
    <>
     <div className='container'>

            <div className='row mt-5'>
                <div className={`col-12 text-center px-5 ${styles.title1}`}>
                        Watch Thousands Of TV Shows, Movies, And Sports Anytime, Anywhere. Level Up Your TV.
                </div>
            </div>

            <div className='row mt-3'>   
                <div className={`col-12 text-center px-4 ${styles.title2}`}>
                    ipTV Infinity
                        <Typical
                        className={`${styles.typic}`}
                        steps={[' Better', 9000, ' Faster', 9000, ' Smarter', 9000]}
                        loop={2}
                        wrapper="b"
                        />Service
                </div>
            </div>

            <div className='row mt-4 justify-content-center'>
                <div className='col-md-4 col-lg-4 col-sm-12 text-md-end text-lg-end text-sm-center text-center'>
                    <button type="button" className={`btn btn-warning mt-3 me-0 p-2 ${styles.btn1}`}><Link className={`${styles.btnlink}`} href="/contact">IPTV SUBSCRIPTION</Link></button>
                </div>
                <div className='col-md-4 col-lg-4 col-sm-12 mb-sm-5 text-md-start text-lg-start text-sm-center text-center'>
                    <button type="button" className={`btn btn-warning mt-3 ms-0 p-2 ${styles.btn1}`}><Link className={`${styles.btnlink}`} href="/contact">GET YOUR IPTV NOW</Link></button>
                </div>
            </div>
            

     </div>

    </>
  )
}

export default BackImageHome
