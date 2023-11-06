import React from 'react'
import Image from 'next/image'
import fourk from '@/public/fourk.png'
import channel from '@/public/channel.png'
import support from '@/public/support.png'
import style from '@/components/Chooseus.module.css'

export const config = {
  unstable_runtimeJS: false
};

function Chooseus() {
  return (
    <>
    <div className={`${style.title}`}>Why Choose Us?</div>
      <p className={`p-2 ${style.soustitle}`}>We’ve helped thousands of clients to get the best TV experience with our IPTV service, you can watch live TV & VOD at home or on-the-go — wherever you are, anytime, on your favorite devices.</p>
      <div className='container-fluid text-center  d-block d-md-flex  justify-content-lg-evenly '>
            
            <div className={`text-center ${style.card}`}>
                <div>  <Image
                        src={fourk}
                        alt="IPTV Streaming in USA-CANADA"
                /> 
                </div>
                <h3 className={`${style.tit1}`}>Best Quality Full HD</h3>
                <p>Are you looking for a high quality IPTV subscription? Stable and without cuts with a very good quality? You are in the right place.</p>

            </div>

            <div className={`text-center ${style.card}`}>
                <div>  <Image
                        
                        src={channel}
                        alt="IPTV Streaming in USA-CANADA"
                /> 
                </div>
                <h3 className={`${style.tit2}`}>Compatibility</h3>
                <p>Works on MAG or STB, Android, IOS, PC, Smart TV, FireStick, Xtream, XBMC/KODI and many other devices and apps.</p>

            </div>

            <div className={`text-center ${style.card}`}>
                <div>  <Image
                        
                        src={support}
                        alt="IPTV Streaming in USA-CANADA"
                /> 
                </div>
                <h3 className={`${style.tit3}`}>24/7 Live Support</h3>
                <p>Our expert and trained supports team are ready for 24/7 to solve your technical & billing-related problems. Our support team helping you.</p>

            </div>
      </div>
    </>
  )
}

export default Chooseus
