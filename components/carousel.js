import React from 'react'
import styles from './Carousel.module.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ig1 from '@/public/imagesCarousel/ig1.webp'
import ig2 from '@/public/imagesCarousel/ig2.webp'
import ig3 from '@/public/imagesCarousel/ig3.webp'
import ig4 from '@/public/imagesCarousel/ig4.webp'
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
      <Image key={1} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig1} alt='ig1'/>,
      <Image key={2} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig2} alt='ig2'/>,
      <Image key={3} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig3} alt='ig3'/>,
      <Image key={4} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig4} alt='ig4'/>,
      <Image key={5} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig5} alt='ig5'/>,
      <Image key={6} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig6} alt='ig6'/>,
      <Image key={7} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig7} alt='ig7'/>,
      <Image key={8} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig8} alt='ig8'/>,
      <Image key={9} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig9} alt='ig9'/>,
    ];

    

    const items1 =[
      <Image key={1} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c1} alt='c1'/>,
      <Image key={2} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c2} alt='c2'/>,
      <Image key={3} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c3} alt='c3'/>,
      <Image key={4} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c4} alt='c4'/>,
      
      <Image key={6} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c6} alt='c6'/>,
      <Image key={7} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c7} alt='c7'/>,
      <Image key={8} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c8} alt='c8'/>,
      <Image key={9} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c9} alt='c9'/>,
      <Image key={9} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c10} alt='c10'/>,
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
      autoPlayInterval={800}
      />
    </div>
    
    </>
  )
}

export default Carousel
