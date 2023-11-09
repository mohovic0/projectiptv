import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import { useEffect } from 'react';
import Layout from '@/components/layout';



export default function App({ Component, pageProps }) {
  useEffect(()=>{
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  },[])

 
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
   }
    return (
     
      <>

        
      
      {/* <Script strategy='lazyOnload' src="https://www.googletagmanager.com/gtag/js?id=G-KDZ3EXLNV4"></Script>
      <Script id='google-analysis' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-KDZ3EXLNV4');
        
        `}
      </Script>  */}

      


      
      <Layout>
          <Component {...pageProps} />
      </Layout>
      </>
    ) 
}
