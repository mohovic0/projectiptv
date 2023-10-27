import React from 'react';
import styles from './Footer.module.css'
import logo from '@/public/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => 
<footer className="page-footer font-small blue pt-4 " style={{background : "linear-gradient(to right, #b45721, #000000)"}}>
    
    <div className="container-fluid text-center text-md-left">

    

        <div className="row">
            

            <hr  className="clearfix w-100 pb-0 text-white"/>

            <div className="col-md-3 mb-md-0 mb-3 ">
                
                <ul className={`list-unstyled`}>
                    <li className={`mt-1`}><Link className={`text-white text-decoration-none fw-bold`} href="/about">About us</Link></li>
                    <li className='mt-2'><Link className='text-white text-decoration-none fw-bold mt-3' href="/faq">Refund Policy</Link></li>
                    <li className='mt-2'><Link  className='text-white text-decoration-none fw-bold' href="/faq">Privacy Policy</Link></li>
                    <li className='mt-2'><Link className='text-white text-decoration-none fw-bold' href="/faq">Terms of Use</Link></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                
                <ul className="list-unstyled text-white">
                    <li className='mt-1 fw-bold '> Contact us </li>
                    <li className='mt-2 fw-bold'>Whatsapp : +33 7 74 60 08 76</li>
                    <li className='mt-2 fw-bold'>Email : iptvinfinity2@gmail.com </li>
                  
                </ul>
            </div>

            <div className="col-md-6 mt-md-0 mt-3">
                <Image
                    src={logo}
                    alt="logo"
                    width={80}
                    height={80}
                />
                <h5 className="text-uppercase text-white">IPTV INFINITY</h5>
                <div className="footer-copyright text-center py-3 text-white">© 2022 Copyright:
                  <a href="iptvinfinity.tech" className='text-decoration-none text-white'> iptvinfinity.tech</a>
                </div>
            </div>
        </div>
    </div>

    

</footer>

export default Footer
