import React from 'react'
import styles from './Carousel.module.css'
import AliceCarousel from 'react-alice-carousel';
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
import c11 from '@/public/imagesCarousel/c11.png'



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

    

    const items1 =[
      <Image priority key={1} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c1} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={2} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c2} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={3} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c3} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={4} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c4} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={5} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c5} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={6} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c6} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={7} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c7} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={8} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c8} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={9} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c9} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={10} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c10} alt='iptv subscription UK-Canada-France'/>,
      <Image priority key={11} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={c11} alt='iptv subscription UK-Canada-France'/>,
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
      autoPlayInterval={1500}
      />
      <h1 className='text-center fw-blod text-white pt-3'>New Movies & Series </h1>
    </div>

    <div className={`text-center pt-4  ${styles.secondCaro}`}>
      <AliceCarousel 
      mouseTracking
      items={items1} 
      disableButtonsControls='false'
      disableDotsControls='true'
      infinite
      autoPlay
      autoWidth
      autoPlayInterval={1000}
      />
    </div>
    
    </>
  )
}

export default Carousel
