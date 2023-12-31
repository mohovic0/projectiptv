import React from 'react'
import whatsa from '@/public/whatsa.png'
import Link from 'next/link'
import styles from '@/components/Chatwhatsap.module.css'
import Image from 'next/image'


function Chatwhatsap() {
  return (
    <>
        <div className="container pb-5">
            <h3 className="fs-2 fw-bold mt-3 text-center text-white"> Chat live 24/7 </h3>
            <h5 className="fs-5 mt-3 text-center text-white">Chat live 24/7. We are there for your support</h5>
            <Link href={"https://wa.me/33774600876"}>
                {/* <Lottie className={`mx-auto ${styles.icone}`} loop={true} animationData={whatsa} /> */}
                <div className='text-center'>
                    <Image className={`${styles.icone}`}  src={whatsa} alt = 'IPTV Streaming in Canada' />
                </div>
                
            </Link>         
        </div>
      
    </>
  )
}

export default Chatwhatsap
