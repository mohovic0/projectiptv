import React from 'react'
import styles from './CarouselTow.module.css'
import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';


import c1 from '@/public/imagesCarousel/c1.webp'
import c2 from '@/public/imagesCarousel/c2.webp'
import c3 from '@/public/imagesCarousel/c3.webp'
import c4 from '@/public/imagesCarousel/c4.webp'
import c5 from '@/public/imagesCarousel/c5.webp'
import c6 from '@/public/imagesCarousel/c6.webp'
import c7 from '@/public/imagesCarousel/c7.webp'
import c8 from '@/public/imagesCarousel/c8.webp'
import c9 from '@/public/imagesCarousel/c9.webp'
import c10 from '@/public/imagesCarousel/c10.webp'
import c11 from '@/public/imagesCarousel/c11.webp'


import e1 from '@/public/imagesCarousel/e1.webp'
import e2 from '@/public/imagesCarousel/e2.webp'
import e3 from '@/public/imagesCarousel/e3.webp'
import e4 from '@/public/imagesCarousel/e4.webp'
import e5 from '@/public/imagesCarousel/e5.webp'
import e6 from '@/public/imagesCarousel/e6.webp'
import e7 from '@/public/imagesCarousel/e7.webp'
import e8 from '@/public/imagesCarousel/e8.webp'
import e9 from '@/public/imagesCarousel/e9.webp'


function Carouseltwo() {

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

    const items1 =[
        <Image priority key={1} onDragStart={handleDragStart} className={`${styles.imagesCarousel1}`} src={c1} alt='iptv subscription UK-Canada-France'/>,
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
        <Image priority key={1} onDragStart={handleDragStart} className={`${styles.imagesCarousel1}`} src={e1} alt='iptv subscription UK-Canada-France'/>,
        <Image priority key={2} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e2} alt='iptv subscription UK-Canada-France'/>,
        <Image priority key={3} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e3} alt='iptv subscription UK-Canada-France'/>,
        <Image priority key={4} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e4} alt='iptv subscription UK-Canada-France'/>,
        <Image priority key={5} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e5} alt='iptv subscription UK-Canada-France'/>,
        <Image priority key={6} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e6} alt='iptv subscription UK-Canada-France'/>,
        <Image priority key={7} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e7} alt='iptv subscription UK-Canada-France'/>,
        <Image priority key={8} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e8} alt='iptv subscription UK-Canada-France'/>,
        <Image priority key={9} onDragStart={handleDragStart} className={styles.imagesCarousel1} src={e9} alt='iptv subscription UK-Canada-France'/>,
      ];


  return (
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
  )
}

export default Carouseltwo
