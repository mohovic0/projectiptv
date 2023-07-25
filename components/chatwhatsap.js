import React from 'react'
import Lottie from "lottie-react"
import whatsa from '@/public/whatsappp'
import Link from 'next/link'
import styles from '@/components/Chatwhatsap.module.css'

function Chatwhatsap() {
  return (
    <>
        <div className="container pb-5">
            <h3 className="fs-2 fw-bold mt-3 text-center"> Chat live 24/7 </h3>
            <h5 className="fs-5 mt-3 text-center">Chat live 24/7. We are there for your support</h5>
            <Link href={""}>
                <Lottie className={`mx-auto ${styles.icone}`} loop={true} animationData={whatsa} />
            </Link>         
        </div>
      
    </>
  )
}

export default Chatwhatsap
