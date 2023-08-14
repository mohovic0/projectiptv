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
     
      <Layout>
          <Component {...pageProps} />
      </Layout>
    ) 
}
