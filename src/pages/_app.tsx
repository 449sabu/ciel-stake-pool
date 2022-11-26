import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import usePageView from '../../src/hooks/usePageView';
import GoogleAnalytics from '../../src/libs/GoogleAnalytics';
import Navbar from '../components/Navbar';
import Footer from 'components/Footer';
// Google Analytics
// import { existsGaId, pageview } from '../../src/libs/gtag'

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();

  return (
    <>
      <Head>
        <GoogleAnalytics />
      </Head>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MyApp;
