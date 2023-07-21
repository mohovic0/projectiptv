import React from 'react'
import aboutLottie from '@/public/aboutLottie'
import Lottie from 'lottie-react'
import styles from './About.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faCheck} from '@fortawesome/free-solid-svg-icons'


function About() {
  return (
    <>

      <div className='container mt-5'>
        <div className='row'>

          <div className='col-12 col-lg-6'>
                  <Lottie className={`mx-auto `} loop={true} animationData={aboutLottie} />
          </div>
          <div className='col-12 col-lg-6'>
                  <h2 className='fw-blod fs-2 mb-5'>We Provide Best IPTV Server In The World Wide</h2>
                  Today, we are revolutionizing the way you access the television. With +13000 channels and unique apps, you’ll be watching IPTV in a radically new, intelligent, and intuitive way.
                  
                  <div className='row mt-5'>
                    <ul className='col list-group list-group-flush'>
                      <li className='mb-4 list-group-item'><FontAwesomeIcon className={styles.icon} icon={faCheck} /> 150+ Countries Live Channles</li>
                      <li className='list-group-item mb-4'><FontAwesomeIcon className={styles.icon} icon={faCheck} /> Expert technical team</li>
                      <li className=' list-group-item mb-2'><FontAwesomeIcon className={styles.icon} icon={faCheck} /> Reasonable price packages</li>
                    </ul>
                    <ul className='col list-group list-group-flush'>
                      <li className='list-group-item mb-4'><FontAwesomeIcon className={styles.icon} icon={faCheck} /> Trusted & recommended  </li>
                      <li className=' list-group-item mb-4'><FontAwesomeIcon className={styles.icon} icon={faCheck} /> 24/7 quick support</li>
                      <li className=' list-group-item mb-2'><FontAwesomeIcon className={styles.icon} icon={faCheck} /> Best Network Server</li>
                    </ul>
                  </div>
                  
                  <div className='mb-5'>
                    <button type="button" className={`btn btn-warning mt-3 ms-0 p-2 ${styles.btn1}`}>
                      <Link className={`${styles.btnlink}`} href="/contact">
                        Subscription Now <FontAwesomeIcon className={styles.fonticone} icon={faArrowRightLong} />
                        </Link>
                    </button>
                  </div>
                  
                  
                 
                  
                  
          </div>

        </div>
      </div>
      
    </>
  )
}

export default About
