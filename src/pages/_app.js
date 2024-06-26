// import '@assets/css/bootstrap.min.css';
import "@assets/scss/main.scss";
import "@assets/fonts/fontawesome-all.min.css";
import './global.css'

// Import Swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Script from "next/script";


//Modal Video
import "react-modal-video/scss/modal-video.scss";
import Head from "next/head";
import { Fragment } from "react";
import { SessionProvider } from 'next-auth/react';


function MyApp({ Component,pageProps: { session, ...pageProps } } ) {
  return (
    <Fragment>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
    </Fragment>
  );
}

export default MyApp;
