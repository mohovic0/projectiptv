import React from 'react'
import styles from '@/components/Boite.module.css'


function Boite() {
  return (
  
    <div className="container-fluid text-center text-white ">
                <div className="row justify-content-center pb-2 ">
                      <div className={`col-sm-12 col-md-4 col-lg-4 col-xl-4 pt-2` }>
                            <div className={`justify-content-center align-items-center  text-center  ${styles.boitone}`}>
                    
                                <h3 className="fs-2 fw-bold mt-3"> channels from 115 countries worldwide </h3>
                                <h5 className="fs-5 mt-3">you can watch TV channels from arnound the world (Netherlands/Belguim/Germany/Spain/ /Portugal/Poland/Italy/Israel/Ex-Yu/Hindi/Arabic</h5>
                            </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4  pt-2">
                          <div className={`justify-content-center align-items-center text-center  ${styles.boitone}`}>
                          
                              <h3 className="fs-2 fw-bold mt-3">7 day money back guarantee </h3>
                              <h5 className="fs-5 mt-3">within 7 day of your purchase you have the option to cancel our iptv subscription if you are not satisfied. Then you will receive a full refund from us</h5>
                          </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 pt-2">
                          <div className={`justify-content-center align-items-center text-center  ${styles.boitone}`}>
                         
                              <h3 className="fs-2 fw-bold mt-3">High Quality HD/FHD/4K/8K</h3>
                              <h5 className="fs-5 mt-3">We offer all image qualities to view our iptv service everywhere, regardless of your network speed on: Mobile/TV/Android box/ PC</h5>
                          </div>
                      </div>
                      
                </div>
</div> 
  )
}

export default Boite
