import React from 'react'
import Image from 'next/image'
import m1 from '@/public/m1.webp'
import m2 from '@/public/m2.webp'
import m3 from '@/public/m3.webp'
import m4 from '@/public/m4.webp'

import style from '@/components/Sportmovies.module.css'

export const config = {
  unstable_runtimeJS: false
};

function Sportmovies() {
  return (
    <>
    <div className={`${style.title}`}>Why Choose Us?</div>
      <p className={`p-2 ${style.soustitle}`}>We’ve helped thousands of clients to get the best TV experience with our IPTV service, you can watch live TV & VOD at home or on-the-go — wherever you are, anytime, on your favorite devices.</p>
      <div className='container-fluid text-center  d-block d-md-flex  justify-content-lg-evenly '>
            
            <div className={`text-center ${style.card}`}>
                <div>  <Image
                        src={m1}
                        alt=""
                        width={60}
                        height={60}
                /> 
                </div>
                <h3 className={`pt-3 ${style.tit1}`}>Live TV</h3>
                <p>Live TV Channels All Around the World</p>

            </div>

            <div className={`text-center ${style.card}`}>
                <div>  <Image
                        
                        src={m2}
                        alt="IPTV Streaming in USA-CANADA"
                        width={60}
                        height={60}
                /> 
                </div>
                <h3 className={`${style.tit2}`}>Sports</h3>
                <p>All Premium Sports Channels and World Cup</p>

            </div>

            <div className={`text-center ${style.card}`}>
                <div>  <Image
                        
                        src={m3}
                        alt="IPTV Streaming in USA-CANADA"
                        width={60}
                        height={60}
                /> 
                </div>
                <h3 className={`${style.tit3}`}>Movies</h3>
                <p>Hundreds of movie channels and video on demand.</p>

            </div>

            <div className={`text-center ${style.card}`}>
                <div>  <Image
                        
                        src={m4}
                        alt="IPTV Streaming in USA-CANADA"
                        width={60}
                        height={60}
                /> 
                </div>
                <h3 className={`${style.tit3}`}>TV Series</h3>
                <p>Best TV Shows of 2022 and All Time</p>

            </div>
      </div>
    </>
  )
}

export default Sportmovies
