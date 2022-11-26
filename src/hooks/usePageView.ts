// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// import { existsGaId, pageview } from '../libs/gtag';

// export default function usePageView() {
//   const router = useRouter();

//   useEffect(() => {
//     if (!existsGaId) {
//       return;
//     }

//     const handleRouteChange = (path) => {
//       pageview(path);
//     };

//     router.events.on('routeChangeComplete', handleRouteChange);

//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange);
//     };
//   }, [router.events]);
// }

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GA_ID, pageview } from '../libs/gtag';

export const usePageView = () => {
  const router = useRouter();
  useEffect(() => {
    // GA_TRACKING_ID が設定されていない場合は、処理終了
    if (!GA_ID) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRouteChange = (url: string, { shallow }: any) => {
      if (!shallow) {
        pageview(url);
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};
