import { MeshProvider } from '@martifylabs/mesh-react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import { usePageView, GoogleAnalytics } from '../../src/libs/gtag';
import Navbar from '../components/Navbar';
import Footer from 'components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();

  return (
    <>
      <Head>
        <GoogleAnalytics />
      </Head>
      <MeshProvider>
        <header>
          <Navbar />
        </header>
        <Component {...pageProps} />
        <footer>
          <Footer />
        </footer>
      </MeshProvider>
    </>
  );
}

export default MyApp;
