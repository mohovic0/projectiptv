import React from 'react'
import styles from './Carousel.module.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ig1 from '@/public/imagesCarousel/ig1.jpg'
import ig2 from '@/public/imagesCarousel/ig2.jpeg'
import ig3 from '@/public/imagesCarousel/ig3.jpg'
import ig4 from '@/public/imagesCarousel/ig4.jpg'
import ig5 from '@/public/imagesCarousel/ig5.jpg'
import ig6 from '@/public/imagesCarousel/ig6.webp'
import ig7 from '@/public/imagesCarousel/ig7.jpg'
import ig8 from '@/public/imagesCarousel/ig8.webp'
import ig9 from '@/public/imagesCarousel/ig9.webp'
import ig10 from '@/public/imagesCarousel/ig1.jpg'
import ig11 from '@/public/imagesCarousel/ig5.jpg'
import ig12 from '@/public/imagesCarousel/ig3.jpg'

import Image from 'next/image';

function Carousel() {

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0 : {items: 1 },
        300 : {items: 2 },
        1024 : {items: 4 },
    }

    const items = [
    <div key={0}> <Image className={`${styles.divCarouel}`}  key={0} onDragStart={handleDragStart}  priority src={ig1} alt="logo" /> </div> ,
    <div key={0}><Image className={`${styles.divCarouel}`}   key={0} onDragStart={handleDragStart}  priority src={ig2} alt="logo" /> </div> ,
    <div key={0}><Image className={`${styles.divCarouel}`}  key={0} onDragStart={handleDragStart}  priority src={ig3} alt="logo" /> </div> ,
    <div key={0}><Image className={`${styles.divCarouel}`}  key={0} onDragStart={handleDragStart}  priority src={ig4} alt="logo" /> </div> ,
    <div key={0}><Image className={`${styles.divCarouel}`}  key={0} onDragStart={handleDragStart}  priority src={ig5} alt="logo" /> </div> ,
    <div key={0}><Image className={`${styles.divCarouel}`}  key={0} onDragStart={handleDragStart}  priority src={ig6} alt="logo" /> </div> ,
    <div key={0}><Image className={`${styles.divCarouel}`}  key={0} onDragStart={handleDragStart}  priority src={ig7} alt="logo" /> </div> ,
    <div key={0}><Image className={`${styles.divCarouel}`}  key={0} onDragStart={handleDragStart}  priority src={ig8} alt="logo" /> </div> ,
    <div key={0}><Image className={`${styles.divCarouel}`}  key={0} onDragStart={handleDragStart}  priority src={ig9} alt="logo" /> </div> ,
    <div key={0}><Image className={`${styles.divCarouel}`}  key={0} onDragStart={handleDragStart}  priority src={ig10} alt="logo" /> </div> ,
    <div key={0}><Image className={`${styles.divCarouel}`}  key={0} onDragStart={handleDragStart}  priority src={ig11} alt="logo" /> </div> ,
    // <Image key={1} onDragStart={handleDragStart} priority src={ig2} alt="logo" />,
    // <Image key={2} onDragStart={handleDragStart} priority src={ig3} alt="logo" />,
    // <Image key={3} onDragStart={handleDragStart} priority src={ig4} alt="logo" />,
    // <Image key={4} onDragStart={handleDragStart} priority src={ig5} alt="logo" />,
    // <Image key={5} onDragStart={handleDragStart} priority src={ig6} alt="logo" />,
    // <Image key={6} onDragStart={handleDragStart} priority src={ig7} alt="logo" />,
    // <Image key={7} onDragStart={handleDragStart} priority src={ig8} alt="logo" />,
    // <Image key={8} onDragStart={handleDragStart} priority src={ig9} alt="logo" />,
    // <Image key={9} onDragStart={handleDragStart} priority src={ig10} alt="logo" />,
    // <Image key={10} onDragStart={handleDragStart} priority src={ig11} alt="logo" />,
    // <Image key={11} onDragStart={handleDragStart} priority src={ig12} alt="logo" />,
    // <Image key={12} onDragStart={handleDragStart} priority src={ig13} alt="logo" />,
    // <Image key={13} onDragStart={handleDragStart} priority src={ig14} alt="logo" />,
    ];

  return (
    <>
    <div className='text-center'>
      <AliceCarousel 
      mouseTracking
      items={items} 
      disableButtonsControls='false'
      disableDotsControls='true'
      responsive={responsive}
      />
    </div>
    
    </>
  )
}

export default Carousel
