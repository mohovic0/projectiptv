import React from 'react'
import PersoNav from './persoNav'
import Footer from './footer'

function layout({children}) {
  return (
    <>
     <PersoNav/> 
     <main>{children}</main>
     <Footer />
    </>
  )
}

export default layout
