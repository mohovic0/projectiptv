import React from 'react'
import styles from './Foot.module.css'
import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';
import 'react-alice-carousel/lib/alice-carousel.css';
import f1 from '@/public/imagesCarousel/f1.jpg'
import f2 from '@/public/imagesCarousel/f2.jpg'
import f3 from '@/public/imagesCarousel/f3.jpg'
import f4 from '@/public/imagesCarousel/f4.jpg'
import f5 from '@/public/imagesCarousel/f5.jpg'
import f6 from '@/public/imagesCarousel/f6.jpg'
import f7 from '@/public/imagesCarousel/f7.jpg'
import f8 from '@/public/imagesCarousel/f8.jpg'
import f9 from '@/public/imagesCarousel/f9.jpg'
import f10 from '@/public/imagesCarousel/f10.jpg'









const Foot = () => {

  

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
      <Image key={1} onDragStart={handleDragStart} className={` ${styles.imagesCarousel}`} src={f1} alt='iptv subscription UK-Canada-France'/>,
      <Image key={2} onDragStart={handleDragStart} className={`${styles.imagesCarousel}`} src={f2} alt='iptv subscription UK-Canada-France'/>,
      <Image key={3} onDragStart={handleDragStart} className={styles.imagesCarousel} src={f3} alt='iptv subscription UK-Canada-France'/>,
      <Image key={4} onDragStart={handleDragStart} className={styles.imagesCarousel} src={f4} alt='iptv subscription UK-Canada-France'/>,
      <Image key={5} onDragStart={handleDragStart} className={styles.imagesCarousel} src={f5} alt='iptv subscription UK-Canada-France'/>,
      <Image key={6} onDragStart={handleDragStart} className={styles.imagesCarousel} src={f6} alt='iptv subscription UK-Canada-France'/>,
      <Image key={7} onDragStart={handleDragStart} className={styles.imagesCarousel} src={f7} alt='iptv subscription UK-Canada-France'/>,
      <Image key={8} onDragStart={handleDragStart} className={styles.imagesCarousel} src={f8} alt='iptv subscription UK-Canada-France'/>,
      <Image key={9} onDragStart={handleDragStart} className={styles.imagesCarousel} src={f9} alt='iptv subscription UK-Canada-France'/>,
     

    ];

    

    

  return (
    <>
   
    <div className={`${styles.title}`}>Best FootBall Leagues And All Sports Events FHD And 4K Quality</div>
    <p className={`p-2 ${styles.soustitle}`}>Watch football live streaming on Infinity High quality IPTV subscription Hd online Today without paying for a cable subscription. You can now watch The Best FootBall Leagues and All Sports Events with The Strong Infinity iptv Service High quality IPTV subscription</p>
    <div className={`text-center pb-1 pt-4 ${styles.firstCaro}`}>
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

export default Foot
