import React from 'react'
import styles from './Movie.module.css'
import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';
import 'react-alice-carousel/lib/alice-carousel.css';
import d1 from '@/public/imagesCarousel/d1.jpg'
import d2 from '@/public/imagesCarousel/d2.jpg'
import d3 from '@/public/imagesCarousel/d3.jpg'
import d4 from '@/public/imagesCarousel/d4.jpg'
import d5 from '@/public/imagesCarousel/d5.jpg'
import d6 from '@/public/imagesCarousel/d6.jpg'
import d7 from '@/public/imagesCarousel/d7.jpg'
import d8 from '@/public/imagesCarousel/d8.jpeg'
import d9 from '@/public/imagesCarousel/d9.jpg'
import d10 from '@/public/imagesCarousel/d10.jpg'
import d11 from '@/public/imagesCarousel/d11.jpg'
import d12 from '@/public/imagesCarousel/d12.jpg'
import d13 from '@/public/imagesCarousel/d13.jpg'
import d14 from '@/public/imagesCarousel/d14.jpg'
// import d15 from '@/public/imagesCarousel/d15.jpg'
import d16 from '@/public/imagesCarousel/d16.webp'
import d17 from '@/public/imagesCarousel/d17.webp'
import d18 from '@/public/imagesCarousel/d18.jpg'
import d19 from '@/public/imagesCarousel/d19.jpg'
import d20 from '@/public/imagesCarousel/d20.jpg'
import d21 from '@/public/imagesCarousel/d21.jpg'
import d22 from '@/public/imagesCarousel/d22.webp'
import d23 from '@/public/imagesCarousel/d23.jpg'
import d24 from '@/public/imagesCarousel/d24.jpg'
import d25 from '@/public/imagesCarousel/d25.jpg'
import d26 from '@/public/imagesCarousel/d26.jpg'
import d27 from '@/public/imagesCarousel/d27.jpg'
import d28 from '@/public/imagesCarousel/d28.jpg'









const Movie = () => {

  

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
        <Image key={1} onDragStart={handleDragStart} className={` ${styles.imagesCarousel}`} src={d1} alt='iptv subscription UK-Canada-France'/>,
        <Image key={2} onDragStart={handleDragStart} className={`${styles.imagesCarousel}`} src={d2} alt='iptv subscription UK-Canada-France'/>,
        <Image key={3} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d3} alt='iptv subscription UK-Canada-France'/>,
        <Image key={4} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d4} alt='iptv subscription UK-Canada-France'/>,
        <Image key={5} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d5} alt='iptv subscription UK-Canada-France'/>,
        <Image key={6} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d6} alt='iptv subscription UK-Canada-France'/>,
        <Image key={7} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d7} alt='iptv subscription UK-Canada-France'/>,
        <Image key={8} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d8} alt='iptv subscription UK-Canada-France'/>,
        <Image key={9} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d9} alt='iptv subscription UK-Canada-France'/>,
        <Image key={10} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d10} alt='iptv subscription UK-Canada-France'/>,
        <Image key={11} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d11} alt='iptv subscription UK-Canada-France'/>,
        <Image key={12} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d12} alt='iptv subscription UK-Canada-France'/>,
        <Image key={13} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d13} alt='iptv subscription UK-Canada-France'/>,
        <Image key={14} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d14} alt='iptv subscription UK-Canada-France'/>,
        // <Image key={15} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d15} alt='iptv subscription UK-Canada-France'/>,
        <Image key={16} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d16} alt='iptv subscription UK-Canada-France'/>,
        <Image key={17} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d17} alt='iptv subscription UK-Canada-France'/>,
        <Image key={18} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d18} alt='iptv subscription UK-Canada-France'/>,
        <Image key={19} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d19} alt='iptv subscription UK-Canada-France'/>,
        <Image key={20} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d20} alt='iptv subscription UK-Canada-France'/>,
        <Image key={21} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d21} alt='iptv subscription UK-Canada-France'/>,
        <Image key={22} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d22} alt='iptv subscription UK-Canada-France'/>,
        <Image key={23} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d23} alt='iptv subscription UK-Canada-France'/>,
        <Image key={24} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d24} alt='iptv subscription UK-Canada-France'/>,
        <Image key={25} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d25} alt='iptv subscription UK-Canada-France'/>,
        <Image key={26} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d26} alt='iptv subscription UK-Canada-France'/>,
        <Image key={27} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d27} alt='iptv subscription UK-Canada-France'/>,
        <Image key={28} onDragStart={handleDragStart} className={styles.imagesCarousel} src={d28} alt='iptv subscription UK-Canada-France'/>,
      ];

    

    

  return (
    <>
   
    <div className={`${styles.title}`}>We offer you the best movies and series</div>
    
    <p className={`p-2 ${styles.soustitle}`}>With iptv-streaming you can watch what you want, whenever you want, the best movies and TV series</p>
    <div className={`text-center pb-1 pt-4 ${styles.firstCaro}`}>
      <AliceCarousel 
      mouseTracking
      items={items} 
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

export default Movie
