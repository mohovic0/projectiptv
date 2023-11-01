import React from 'react'
import styles from './CarouselReview.module.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import r1 from '@/public/imagesCarousel/r1.webp'
import r2 from '@/public/imagesCarousel/r2.webp'
import r3 from '@/public/imagesCarousel/r3.webp'
import r4 from '@/public/imagesCarousel/r4.webp'
import r5 from '@/public/imagesCarousel/r5.webp'
import r6 from '@/public/imagesCarousel/r6.webp'



import Image from 'next/image';

const CarouselReview = () => {

  

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
      <Image key={1} onDragStart={handleDragStart} className={styles.imagesCarousel} src={r1} alt='iptv subscription UK-Canada-France'/>,
      <Image key={2} onDragStart={handleDragStart} className={styles.imagesCarousel} src={r2} alt='iptv subscription UK-Canada-France'/>,
      <Image key={3} onDragStart={handleDragStart} className={styles.imagesCarousel} src={r3} alt='iptv subscription UK-Canada-France'/>,
      <Image key={4} onDragStart={handleDragStart} className={styles.imagesCarousel} src={r4} alt='iptv subscription UK-Canada-France'/>,
      <Image key={5} onDragStart={handleDragStart} className={styles.imagesCarousel} src={r5} alt='iptv subscription UK-Canada-France'/>,
      <Image key={6} onDragStart={handleDragStart} className={styles.imagesCarousel} src={r6} alt='iptv subscription UK-Canada-France'/>,
    

    ];

    

   

  return (
    <>
     <div className={`pt-3 ${styles.title}`}>Reviews & Support </div>
    <div className={`text-center pb-3 pt-2 ${styles.firstCaro}`}>
      <AliceCarousel 
      mouseTracking
      items={items} 
      disableButtonsControls='false'
      disableDotsControls='true'
      infinite
      autoPlay
      autoWidth
      autoPlayInterval={1500}
      />
     
    </div>

    
    </>
  )
}

export default CarouselReview
