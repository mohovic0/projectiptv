import React from 'react'
import styles from './CarouselReview.module.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import r1 from '@/public/imagesCarousel/r1.png'
import r2 from '@/public/imagesCarousel/r2.png'
import r3 from '@/public/imagesCarousel/r3.png'
import r4 from '@/public/imagesCarousel/r4.png'
import r5 from '@/public/imagesCarousel/r5.png'
import r6 from '@/public/imagesCarousel/r6.png'









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
      <Image priority key={1} onDragStart={handleDragStart} className={styles.imagesCarousel} src={r1} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={2} onDragStart={handleDragStart} className={styles.imagesCarousel} src={r2} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={3} onDragStart={handleDragStart} className={styles.imagesCarousel} src={r3} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={4} onDragStart={handleDragStart} className={styles.imagesCarousel} src={r4} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={5} onDragStart={handleDragStart} className={styles.imagesCarousel} src={r5} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={6} onDragStart={handleDragStart} className={styles.imagesCarousel} src={r6} alt='iptv subscription UK-Canada-France'/>,
    

    ];

    

   

  return (
    <>
     <h1 className='text-center fw-blod text-white pt-3'>Reviews & Support</h1>
    <div className={`text-center pb-1 pt-2 ${styles.firstCaro}`}>
      <AliceCarousel 
      mouseTracking
      items={items} 
      disableButtonsControls='false'
      disableDotsControls='true'
      infinite
      autoPlay
      autoWidth
      autoPlayInterval={800}
      />
     
    </div>

    
    </>
  )
}

export default CarouselReview
