import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import { useEffect } from 'react';
import Layout from '@/components/layout';
import Script from 'next/script';



export default function App({ Component, pageProps }) {
  useEffect(()=>{
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  },[])

 
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
   }
    return (
     
      <>
      
      <Script strategy='lazyOnload' src="https://www.googletagmanager.com/gtag/js?id=G-M6X8D17K5R"></Script>
      <Script id='google-analysis' strategy='lazyOnload'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-M6X8D17K5R');  
        gtag('config', 'AW-837057681');
        `}
      </Script>

      


      
      <Layout>
          <Component {...pageProps} />
      </Layout>
      </>
    ) 
}
