import React from 'react'
import styles from './Carousel.module.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ig1 from '@/public/imagesCarousel/ig1.png'
import ig2 from '@/public/imagesCarousel/ig2.png'
import ig3 from '@/public/imagesCarousel/ig3.png'
import ig4 from '@/public/imagesCarousel/ig4.png'
import ig5 from '@/public/imagesCarousel/ig5.jpeg'
import ig6 from '@/public/imagesCarousel/ig6.jpeg'
import ig7 from '@/public/imagesCarousel/ig7.jpeg'
import ig8 from '@/public/imagesCarousel/ig8.jpg'
import ig9 from '@/public/imagesCarousel/ig9.jpeg'
import c1 from '@/public/imagesCarousel/c1.png'
import c2 from '@/public/imagesCarousel/c2.png'
import c3 from '@/public/imagesCarousel/c3.png'
import c4 from '@/public/imagesCarousel/c4.png'

import c6 from '@/public/imagesCarousel/c6.png'
import c7 from '@/public/imagesCarousel/c7.png'
import c8 from '@/public/imagesCarousel/c8.png'
import c9 from '@/public/imagesCarousel/c9.png'
import c10 from '@/public/imagesCarousel/c10.png'



import Image from 'next/image';

const Carousel = () => {

  

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
      <Image priority key={1} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig1} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={2} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig2} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={3} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig3} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={4} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig4} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={5} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig5} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={6} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig6} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={7} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig7} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={8} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig8} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={9} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig9} alt='iptv subscription UK-Canada-France'/>,
    ];

    

    const items1 =[
      <Image priority key={1} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c1} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={2} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c2} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={3} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c3} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={4} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c4} alt='iptv subscription UK-Canada-France'/>,
      
      <Image priority key={6} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c6} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={7} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c7} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={8} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c8} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={9} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c9} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={9} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c10} alt='iptv subscription UK-Canada-France'/>,
    ];

  return (
    <>
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
      <h1 className='text-center fw-blod text-white pt-3'>NEW MOVIES & SERIES </h1>
    </div>

    <div className={`text-center pt-4 pb-3 ${styles.secondCaro}`}>
      <AliceCarousel 
      mouseTracking
      items={items1} 
      disableButtonsControls='false'
      disableDotsControls='true'
      infinite
      autoPlay
      autoWidth
      autoPlayInterval={400}
      />
    </div>
    
    </>
  )
}

export default Carousel
