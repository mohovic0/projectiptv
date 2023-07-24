import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@/components/PersoNav.module.css'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '@/public/logo.png'
import Image from 'next/image'

const PersoNav = () =>  {

    const router = useRouter()
    const routerCurrent = router.pathname;
    

    const [clicked, setClicked] = useState(false);
    
  return (
    <>
        <nav className={styles.nav}>
            
            <Link href='/'>
                <Image
                    priority
                    src={logo}
                    alt="logo"
                />
            </Link>

            <div>
                <ul id={styles.nav_list} className={clicked ?  styles.active : '#nav_list'}>
                    <li>
                        <Link href="/" className={ routerCurrent === "/"  ? styles.active  : '' }  >Home</Link>
                    </li>
                    <li>
                        <Link  href="/faq" className={ routerCurrent === "/faq"  ? styles.active  : '' } >FAQ</Link>
                    </li>
                    <li>
                        <Link href="/about" className={ routerCurrent === "/about"  ? styles.active  : '' }>About</Link>
                    </li>
                    <li>
                        <Link href="/contact" className={ routerCurrent === "/contact" || routerCurrent === "/contact/pack3" || routerCurrent === "/contact/pack6" || routerCurrent === "/contact/pack12" ? styles.active  : '' }>Contact</Link>
                    </li>

                </ul>
            </div>

            
            <div id={styles.icon_mobile} onClick={()=>{setClicked(!clicked)}} >
                <FontAwesomeIcon id={styles.fonticone} icon={clicked ? faXmark : faBars} size="2xl"/>
            </div>
            
            
        </nav>
      

    </>
  )

}

export default PersoNav
