import React from 'react'
import styles from './CarouselTow.module.css'
import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';


import c1 from '@/public/imagesCarousel/c1.png'
import c2 from '@/public/imagesCarousel/c2.png'
import c3 from '@/public/imagesCarousel/c3.png'
import c4 from '@/public/imagesCarousel/c4.png'
import c5 from '@/public/imagesCarousel/c5.png'
import c6 from '@/public/imagesCarousel/c6.png'
import c7 from '@/public/imagesCarousel/c7.png'
import c8 from '@/public/imagesCarousel/c8.png'
import c9 from '@/public/imagesCarousel/c9.jpg'
import c10 from '@/public/imagesCarousel/c10.png'
import c11 from '@/public/imagesCarousel/c11.png'


function Carouseltwo() {

    const handleDragStart = (e) => e.preventDefault();

    // const responsive = {
    //     0 : {items: 1 },
    //     568 : {items: 2 },
    //     1024 : {items: 4 },
    // }
    // const responsive1 = {
    //     0 : {items: 1 },
    //     568 : {items: 2 },
    //     1024 : {items: 6 },
    // }

    const items1 =[
        <Image key={1} onDragStart={handleDragStart} className={`${styles.imagesCarousel1}`} src={c1} alt='iptv subscription UK-Canada-France'/>,
        <Image key={2} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c2} alt='iptv subscription UK-Canada-France'/>,
        <Image key={3} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c3} alt='iptv subscription UK-Canada-France'/>,
        <Image key={4} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c4} alt='iptv subscription UK-Canada-France'/>,
        <Image key={5} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c5} alt='iptv subscription UK-Canada-France'/>,
        <Image key={6} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c6} alt='iptv subscription UK-Canada-France'/>,
        <Image key={7} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c7} alt='iptv subscription UK-Canada-France'/>,
        <Image key={8} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c8} alt='iptv subscription UK-Canada-France'/>,
        <Image key={9} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c9} alt='iptv subscription UK-Canada-France'/>,
        <Image key={10} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c10} alt='iptv subscription UK-Canada-France'/>,
        <Image key={11} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c11} alt='iptv subscription UK-Canada-France'/>,
      ];


  return (
     <div className={`text-center pt-4  ${styles.secondCaro}`}>
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
  )
}

export default Carouseltwo
