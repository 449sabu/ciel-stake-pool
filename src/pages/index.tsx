import type { NextPage } from 'next';
import Head from 'next/head';
import Alliance from 'components/Alliance';
import PoolStats from 'components/PoolStats';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CIEL Stake Pool</title>
        <meta name="description" content="CIEL Stake Poolのホームページです" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero min-h-screen bg-gradient-to-br from-green-300 via-blue-500 to-purple-600">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">CIEL Stake Pool</h1>
            <p className="py-6 max-w-md mx-auto">
              ARMベースで構築された環境に優しいnodeは、低消費電力を実現し地理的分散化に貢献します。
            </p>
            <p className="text-3xl max-w-md mx-auto">Ticker : CIEL</p>
            <div className="py-6">
              <PoolStats />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-extrabold text-center mb-4 md:mb-6">
              Our Feature & Mission
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              当プールは以下に重点を置き、持続可能なプール運営を目指します。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Single Pool Operator
                </h3>
                <p className="text-gray-500 mb-2">
                  単一のプールを、1人のオペレーターが責任を持って運営しています。
                </p>
                {/* <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
                >
                  More
                </a> */}
              </div>
            </div>
            {/* <!-- Donations - start --> */}
            {/* <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Donations
                </h3>
                <p className="text-gray-500 mb-2">
                  オペレーター報酬の5%を、国内外の教育支援を行なっている団体に寄付いたします。
                </p>
              </div>
            </div> */}

            {/* <!-- Support - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Support
                </h3>
                <p className="text-gray-500 mb-2">
                  ADAのステーキングに関する質問にお答えします。お気軽にお問い合わせください。
                </p>
              </div>
            </div>

            {/* <!-- Open Source - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Open Source
                </h3>
                <p className="text-gray-500 mb-2">
                  dApps構築などを勉強中です。開発中のプロジェクトはGitHubで公開しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Alliance />
    </>
  );
};

export default Home;
