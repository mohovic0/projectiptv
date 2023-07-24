import {React,  useState } from 'react'
import styles from '@/components/Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import {faCrown} from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

function Card({mois, price, childToParent}) {

    const data = {mois} ;
   

  return (
    <>
        <div className={styles.container}>
            <div className='text-center'><FontAwesomeIcon className={`${styles.iconeCrow}`} icon={faCrown} /></div>
            <div className={styles.title}>
                <h2>{mois} Month Premium Subscription</h2>
                100% Service Guaranteed
            </div>
            
            <div className={styles.price}>
                <h1>{price} &euro;</h1>
            </div>

            <div className={styles.live}>
                <h5>Live Tv…SOPRTS…MOVIES…SERIES…PPV…NEWS…</h5>
            </div>

            <div className={`${styles.info}`}>
                <div className={`mt-4`}>
                    <FontAwesomeIcon className={styles.icon} icon={faCheck} />
                    #1Server -5 Stars
                </div>
                ------------------------
                <div className={`mt-4`}>
                    <FontAwesomeIcon className={styles.icon} icon={faCheck} />
                    +16,000 LiVE TV CHANNELS
                </div>
                ------------------------
                <div className={`mt-4`}>
                    <FontAwesomeIcon className={styles.icon} icon={faCheck} />
                    +12,000 SERIES
                </div>
                ------------------------
                <div className={`mt-4`}>
                    <FontAwesomeIcon className={styles.icon} icon={faCheck} />
                    56,000 MOVIES
                </div>
                ------------------------
                <div className={`mt-4`}>
                    <FontAwesomeIcon className={styles.icon} icon={faCheck} />
                    SD!HD!4K!UlTRA HD
                </div>
                ------------------------
                <div className={`mt-4`}>
                    <FontAwesomeIcon className={styles.icon} icon={faCheck} />
                    CATCH UP | LIVE
                </div>
                ------------------------
                <div className={`mt-4`}>
                    <FontAwesomeIcon className={styles.icon} icon={faCheck} />
                    FREE CHANNELS & VOD UPDATE
                </div>
                ------------------------
                <div className={`mt-4`}>
                    <FontAwesomeIcon className={styles.icon} icon={faCheck} />
                    ANTI FREEZE SYSTEM
                </div>
                ------------------------
                <div className={`mt-4`}>
                    <FontAwesomeIcon className={styles.icon} icon={faCheck} />
                    24/7 SUPPORT
                </div>
                ------------------------
                <div className={`mt-4`}>
                    <FontAwesomeIcon className={styles.icon} icon={faCheck} />
                    All Devices are supported
                </div>
                ------------------------

                
            </div>

            <div className={`mt-4 ${styles.butn}`}>
                <button type="button" className={`btn ${styles.btn}`}
                ><Link className={`${styles.btnlink}`} href={`/contact/pack${mois}`}>GET STARTED</Link>
                </button>
            </div>
            
        </div>
    </>
  )
}

export default Card
