import React from 'react'
import styles from './CarouselThree.module.css'
import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';


import 'react-alice-carousel/lib/alice-carousel.css';
import d1 from '@/public/imagesCarousel/d1.webp'
/*import d2 from '@/public/imagesCarousel/d2.webp'*/
import d3 from '@/public/imagesCarousel/d3.webp'
import d4 from '@/public/imagesCarousel/d4.webp'
import d5 from '@/public/imagesCarousel/d5.webp'
import d6 from '@/public/imagesCarousel/d6.webp'
import d7 from '@/public/imagesCarousel/d7.webp'
import d8 from '@/public/imagesCarousel/d8.webp'
import d9 from '@/public/imagesCarousel/d9.webp'










const Carouselthre = () => {

  

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

    const items =[
      <Image priority key={1} onDragStart={handleDragStart} className={` ${styles.imagesCarousel}`} src={d1} alt='iptv subscription UK-Canada-France'/>,
      /*<Image priority key={2} onDragStart={handleDragStart} className={`${styles.imagesCarousel}`} src={d2} alt='iptv subscription UK-Canada-France'/>,*/
      <Image priority key={3} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d3} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={4} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d4} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={5} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d5} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={6} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d6} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={7} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d7} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={8} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d8} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={9} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d9} alt='iptv subscription UK-Canada-France'/>,
    
    ];

    

    

  return (
    <>
   

   

    <div className={`text-center pb-2 pt-4 ${styles.firstCaro}`}>
      <AliceCarousel 
      mouseTracking
      items={items} 
      disableButtonsControls='false'
      disableDotsControls='true'
      infinite
      autoPlay
      autoWidth
      autoPlayInterval={3000}
      />
      
    </div>
    
    </>
  )
}

export default Carouselthre
