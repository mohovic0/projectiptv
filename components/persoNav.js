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
                    width={48}
                    height={48}
                />
            </Link>

            <div>
                <ul id={styles.nav_list} className={clicked ?  styles.active : '#nav_list'}>
                    <li>
                        <Link href="/" className={ routerCurrent === "/"  ? styles.active  : '' } onClick={()=>{setClicked(!clicked)}} >Home</Link>
                    </li>
                    
                    <li>
                        <Link  href="/pricing" className={ routerCurrent === "/pricing"  ? styles.active  : '' } onClick={()=>{setClicked(!clicked)}} >Pricing</Link>
                    </li>
                    
                    <li>
                        <Link  href="/channels" className={ routerCurrent === "/channels"  ? styles.active  : '' } onClick={()=>{setClicked(!clicked)}} >Channels</Link>
                    </li>

                    <li>
                        <Link  href="/faq" className={ routerCurrent === "/faq"  ? styles.active  : '' } onClick={()=>{setClicked(!clicked)}} >FAQ</Link>
                    </li>

                    <li>
                        <Link href="/about" className={ routerCurrent === "/about"  ? styles.active  : '' } onClick={()=>{setClicked(!clicked)}} >About</Link>
                    </li>
                    
                    <li>
                        <Link href="/contact" className={ routerCurrent === "/contact" || routerCurrent === "/contact/64e3e7d83a767" || routerCurrent === "/contact/64e4013f2de52" || routerCurrent === "/contact/64e40104f2f95" || routerCurrent === "/contact/652878f95473a" ? styles.active  : '' } onClick={()=>{setClicked(!clicked)}} >Contact</Link>
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
