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
import c5 from '@/public/imagesCarousel/c5.png'
import c6 from '@/public/imagesCarousel/c6.png'
import c7 from '@/public/imagesCarousel/c7.png'
import c8 from '@/public/imagesCarousel/c8.png'
import c9 from '@/public/imagesCarousel/c9.png'
import c10 from '@/public/imagesCarousel/c10.png'



import Image from 'next/image';

function Carousel() {

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0 : {items: 1 },
        300 : {items: 2 },
        1024 : {items: 4 },
    }
    const responsive1 = {
        0 : {items: 1 },
        300 : {items: 2 },
        1024 : {items: 6 },
    }

    const items = [
    <div key={0}> <Image className={`${styles.divCarouel}`} key={0} onDragStart={handleDragStart}  priority src={ig1} alt="logo" /> </div> ,
    <div key={1}><Image className={`${styles.divCarouel}`}  key={1} onDragStart={handleDragStart}  priority src={ig2} alt="logo" /> </div> ,
    <div key={2}><Image className={`${styles.divCarouel}`}  key={2} onDragStart={handleDragStart}  priority src={ig3} alt="logo" /> </div> ,
    <div key={3}><Image className={`${styles.divCarouel}`}  key={3} onDragStart={handleDragStart}  priority src={ig4} alt="logo" /> </div> ,
    <div key={4}><Image className={`${styles.divCarouel}`}  key={4} onDragStart={handleDragStart}  priority src={ig5} alt="logo" /> </div> ,
    <div key={5}><Image className={`${styles.divCarouel}`}  key={5} onDragStart={handleDragStart}  priority src={ig6} alt="logo" /> </div> ,
    <div key={6}><Image className={`${styles.divCarouel}`}  key={6} onDragStart={handleDragStart}  priority src={ig7} alt="logo" /> </div> ,
    <div key={7}><Image className={`${styles.divCarouel}`}  key={7} onDragStart={handleDragStart}  priority src={ig8} alt="logo" /> </div> ,
    <div key={8}><Image className={`${styles.divCarouel}`}  key={8} onDragStart={handleDragStart}  priority src={ig9} alt="logo" /> </div> ,
    ];

    const items1 = [
        <div key={0}> <Image className={`${styles.divCarouelC}`} key={0} onDragStart={handleDragStart}  priority src={c1} alt="logo" /> </div> ,
        <div key={1}><Image className={`${styles.divCarouelC}`}  key={1} onDragStart={handleDragStart}  priority src={c2} alt="logo" /> </div> ,
        <div key={2}><Image className={`${styles.divCarouelC}`}  key={2} onDragStart={handleDragStart}  priority src={c3} alt="logo" /> </div> ,
        <div key={3}><Image className={`${styles.divCarouelC}`}  key={3} onDragStart={handleDragStart}  priority src={c4} alt="logo" /> </div> ,
        <div key={4}><Image className={`${styles.divCarouelC}`}  key={4} onDragStart={handleDragStart}  priority src={c5} alt="logo" /> </div> ,
        <div key={5}><Image className={`${styles.divCarouelC}`}  key={5} onDragStart={handleDragStart}  priority src={c6} alt="logo" /> </div> ,
        <div key={6}><Image className={`${styles.divCarouelC}`}  key={6} onDragStart={handleDragStart}  priority src={c7} alt="logo" /> </div> ,
        <div key={7}><Image className={`${styles.divCarouelC}`}  key={7} onDragStart={handleDragStart}  priority src={c8} alt="logo" /> </div> ,
        <div key={8}><Image className={`${styles.divCarouelC}`}  key={8} onDragStart={handleDragStart}  priority src={c9} alt="logo" /> </div> ,
        <div key={9}><Image className={`${styles.divCarouelC}`}  key={9} onDragStart={handleDragStart}  priority src={c10} alt="logo" /> </div> ,    
    ];

  return (
    <>
    <div className={`mb-5 text-center pb-5 ${styles.firstCaro}`}>
      <AliceCarousel 
      mouseTracking
      items={items} 
      disableButtonsControls='false'
      disableDotsControls='true'
      responsive={responsive}
      />
    </div>

    <div className='mt-5 text-center '>
      <AliceCarousel 
      mouseTracking
      items={items1} 
      disableButtonsControls='false'
      disableDotsControls='true'
      responsive={responsive1}
      />
    </div>
    
    </>
  )
}

export default Carousel
