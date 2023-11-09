import React from 'react'
import styles from './Movie.module.css'
import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';
import 'react-alice-carousel/lib/alice-carousel.css';

import d16 from '@/public/imagesCarousel/d16.webp'
import d17 from '@/public/imagesCarousel/d17.webp'
import d18 from '@/public/imagesCarousel/d18.jpg'
import d19 from '@/public/imagesCarousel/d19.jpg'
import d20 from '@/public/imagesCarousel/d20.jpg'
import d21 from '@/public/imagesCarousel/d21.jpg'
import d22 from '@/public/imagesCarousel/d22.webp'
import d23 from '@/public/imagesCarousel/d23.jpg'
import d24 from '@/public/imagesCarousel/d24.jpg'
import d25 from '@/public/imagesCarousel/d25.jpg'
import d26 from '@/public/imagesCarousel/d26.jpg'
import d27 from '@/public/imagesCarousel/d27.jpg'
import d28 from '@/public/imagesCarousel/d28.jpg'



const Movietwo = () => {

  

    const handleDragStart = (e) => e.preventDefault();


    const items1 =[
        <Image key={16} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d16} alt='iptv subscription UK-Canada-France'/>,
        <Image key={17} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d17} alt='iptv subscription UK-Canada-France'/>,
        <Image key={18} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d18} alt='iptv subscription UK-Canada-France'/>,
        <Image key={19} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d19} alt='iptv subscription UK-Canada-France'/>,
        <Image key={20} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d20} alt='iptv subscription UK-Canada-France'/>,
        <Image key={21} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d21} alt='iptv subscription UK-Canada-France'/>,
        <Image key={22} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d22} alt='iptv subscription UK-Canada-France'/>,
        <Image key={23} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d23} alt='iptv subscription UK-Canada-France'/>,
        <Image key={24} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d24} alt='iptv subscription UK-Canada-France'/>,
        <Image key={25} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d25} alt='iptv subscription UK-Canada-France'/>,
        <Image key={26} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d26} alt='iptv subscription UK-Canada-France'/>,
        <Image key={27} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d27} alt='iptv subscription UK-Canada-France'/>,
        <Image key={28} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d28} alt='iptv subscription UK-Canada-France'/>,
      ]

return (
        <>
       

    <div className={`${styles.title}`}>We offer you the best movies and series</div>
    
    <p className={`p-2 ${styles.soustitle}`}>With iptv-streaming you can watch what you want, whenever you want, the best movies and TV series</p>
    <div className={`text-center pb-1 pt-4 ${styles.firstCaro}`}>
      
      <AliceCarousel 
      mouseTracking
      items={items1} 
      disableButtonsControls='false'
      disableDotsControls='true'
      infinite
      autoPlay
      autoWidth
      autoPlayInterval={1000}
      />
     
    </div>
    
    </>
)
}


export default Movietwo