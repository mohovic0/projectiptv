import React from 'react'
import PersoNav from './persoNav'

function layout({children}) {
  return (
    <>
     <PersoNav/> 
     <main>{children}</main>
     
    </>
  )
}

export default layout
