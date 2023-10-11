import React from 'react'
import styles from './CarouselFour.module.css'
import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';


import e1 from '@/public/imagesCarousel/e1.webp'
import e2 from '@/public/imagesCarousel/e2.webp'
import e3 from '@/public/imagesCarousel/e3.webp'
import e4 from '@/public/imagesCarousel/e4.webp'
import e5 from '@/public/imagesCarousel/e5.webp'
import e6 from '@/public/imagesCarousel/e6.webp'
import e7 from '@/public/imagesCarousel/e7.webp'
import e8 from '@/public/imagesCarousel/e8.webp'
import e9 from '@/public/imagesCarousel/e9.webp'



function CarouselFour() {

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
        <Image key={1} onDragStart={handleDragStart} className={`${styles.imagesCarousel1}`} src={e1} alt='iptv subscription UK-Canada-France'/>,
        <Image key={2} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e2} alt='iptv subscription UK-Canada-France'/>,
        <Image key={3} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e3} alt='iptv subscription UK-Canada-France'/>,
        <Image key={4} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e4} alt='iptv subscription UK-Canada-France'/>,
        <Image key={5} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e5} alt='iptv subscription UK-Canada-France'/>,
        <Image key={6} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e6} alt='iptv subscription UK-Canada-France'/>,
        <Image key={7} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e7} alt='iptv subscription UK-Canada-France'/>,
        <Image key={8} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e8} alt='iptv subscription UK-Canada-France'/>,
        <Image key={9} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e9} alt='iptv subscription UK-Canada-France'/>,
      ];


  return (
     <div className={`text-center pt-1  ${styles.secondCaro}`}>
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

export default CarouselFour
