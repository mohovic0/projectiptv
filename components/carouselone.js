import React from 'react'
import styles from './CarouselOne.module.css'
import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';


import 'react-alice-carousel/lib/alice-carousel.css';
import ig1 from '@/public/imagesCarousel/ig1.png'
import ig2 from '@/public/imagesCarousel/ig2.png'
import ig3 from '@/public/imagesCarousel/ig3.png'
import ig4 from '@/public/imagesCarousel/ig4.png'
import ig5 from '@/public/imagesCarousel/ig5.png'
import ig6 from '@/public/imagesCarousel/ig6.png'
import ig7 from '@/public/imagesCarousel/ig7.png'
import ig8 from '@/public/imagesCarousel/ig8.png'
import ig9 from '@/public/imagesCarousel/ig9.jpeg'
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
      <Image priority key={1} onDragStart={handleDragStart} className={` ${styles.imagesCarousel}`} src={ig1} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={2} onDragStart={handleDragStart} className={`${styles.imagesCarousel}`} src={ig2} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={3} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig3} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={4} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig4} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={5} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig5} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={6} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig6} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={7} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig7} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={8} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig8} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={9} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig9} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={10} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig10} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={11} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig11} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={12} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig12} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={13} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig13} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={14} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig14} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={15} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig15} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={16} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig16} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={17} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig17} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={18} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig18} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={19} onDragStart={handleDragStart} className={styles.imagesCarousel} src={ig19} alt='iptv subscription UK-Canada-France'/>,

    ];

    

    

  return (
    <>
   

   

    <div className={`text-center pb-1 pt-3 ${styles.firstCaro}`}>
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
      <h1 className='text-center fw-blod pt-3' style={{color : "#FAF5E9"}}>New Movies & Series </h1>
    </div>
    
    </>
  )
}

export default Carousel
