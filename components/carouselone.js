import React from 'react'
import styles from './CarouselOne.module.css'
import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';
import 'react-alice-carousel/lib/alice-carousel.css';
import ig1 from '@/public/imagesCarousel/ig1.webp'
import ig2 from '@/public/imagesCarousel/ig2.webp'
import ig3 from '@/public/imagesCarousel/ig3.webp'
import ig4 from '@/public/imagesCarousel/ig4.webp'
import ig5 from '@/public/imagesCarousel/ig5.webp'
import ig6 from '@/public/imagesCarousel/ig6.webp'
import ig7 from '@/public/imagesCarousel/ig7.webp'
import ig8 from '@/public/imagesCarousel/ig8.webp'
import ig9 from '@/public/imagesCarousel/ig9.webp'
import ig10 from '@/public/imagesCarousel/ig10.webp'
import ig11 from '@/public/imagesCarousel/ig11.webp'
import ig12 from '@/public/imagesCarousel/ig12.webp'
import ig13 from '@/public/imagesCarousel/ig13.webp'
import ig14 from '@/public/imagesCarousel/ig14.webp'
import ig15 from '@/public/imagesCarousel/ig15.webp'
import ig16 from '@/public/imagesCarousel/ig16.webp'
import ig17 from '@/public/imagesCarousel/ig17.webp'
import ig18 from '@/public/imagesCarousel/ig18.webp'
import ig19 from '@/public/imagesCarousel/ig19.webp'




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
      <Image priority={true} key={1} onDragStart={handleDragStart} className={` ${styles.imagesCarousel}`} src={ig1} alt='IPTV Smart4k'/>,
      <Image priority={true} key={2} onDragStart={handleDragStart} className={`${styles.imagesCarousel}`} src={ig2} alt='IPTV Smart4k'/>,
      <Image priority={true} key={3} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig3} alt='IPTV Smart4k'/>,
      <Image priority={true} key={4} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig4} alt='IPTV Smart4k'/>,
      <Image priority={true} key={5} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig5} alt='IPTV Smart4k'/>,
      <Image priority={true} key={6} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig6} alt='IPTV Smart4k'/>,
      <Image priority={true} key={7} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig7} alt='IPTV Smart4k'/>,
      <Image priority={true} key={8} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig8} alt='IPTV Smart4k'/>,
      <Image priority={true} key={9} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig9} alt='IPTV Smart4k'/>,
      <Image priority={true} key={10} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig10} alt='IPTV Smart4k'/>,
      <Image priority={true} key={11} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig11} alt='IPTV Smart4k'/>,
      <Image priority={true} key={12} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig12} alt='IPTV Smart4k'/>,
      <Image priority={true} key={13} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig13} alt='IPTV Smart4k'/>,
      <Image priority={true} key={14} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig14} alt='IPTV Smart4k'/>,
      <Image priority={true} key={15} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig15} alt='IPTV Smart4k'/>,
      <Image priority={true} key={16} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig16} alt='IPTV Smart4k'/>,
      <Image priority={true} key={17} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig17} alt='IPTV Smart4k'/>,
      <Image priority={true} key={18} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig18} alt='IPTV Smart4k'/>,
      <Image priority={true} key={19} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig19} alt='IPTV Smart4k'/>,

    ];

    

    

  return (
    <>
   

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

export default Carousel
