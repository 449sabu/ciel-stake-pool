import { NextPage } from 'next';
import Image from 'next/image';

const Alliance: NextPage = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        {/* <!-- text - start --> */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Member of the Alliances
          </h2>
          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            CIELは、現在4つのAllianceに参加し活動しています。
          </p>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
          {/* <!-- SPO JAPAN GUILD --> */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 flex justify-center items-center text-white rounded-lg md:rounded-xl mb-6">
              <Image src="/SJG_logo.png" width="300" height="300" alt="xSPO" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
              SPO JAPAN GUILD
            </h3>
            <p className="text-gray-500 text-center mb-2">
              日本最大のSPOコミュニティ。日本語対応可能なSPOが多数在籍しています。
            </p>
            <a
              href="https://spojapanguild.net/"
              className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
            >
              More
            </a>
          </div>
          {/* <!-- Single Pool Alliance --> */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 flex justify-center items-center rounded-lg md:rounded-xl mb-6">
              <Image src="/SPA_logo.webp" width="300" height="300" alt="SJG" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
              Cardano Single Pool Alliance
            </h3>
            <p className="text-gray-500 text-center mb-2">
              シングルプールオペレータのみで結成されており、委任の分散化を促進します。
            </p>
            <a
              href="https://singlepoolalliance.net/"
              className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
            >
              More
            </a>
          </div>
          {/* <!-- xSPO Alliance --> */}
          <div className="flex flex-col items-center">
            <div className="w-28 md:w-28 h-28 md:h-28 flex justify-center items-center text-white rounded-lg md:rounded-xl mb-6">
              <Image
                src="/xSPO_Alliance_logo.webp"
                width="300"
                height="300"
                alt="xSPO"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
              xAPO Alliance
            </h3>
            <p className="text-gray-500 text-center mb-2">
              小規模プールによる委任分散化を進めるグループ。ISPOなどのイベントに積極的に参加しています。
            </p>
            <a
              href="https://twitter.com/AllianceXspo"
              className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
            >
              More
            </a>
          </div>
          {/* <!-- xSPO Alliance --> */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 flex justify-center items-center rounded-lg md:rounded-xl mb-6">
              <Image
                src="/Armada_logo.png"
                width="300"
                height="300"
                alt="xSPO"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
              Armada Alliance
            </h3>
            <p className="text-gray-500 text-center mb-2">
              ARMベースのステークプールのアライアンス。RaspberryPi構築マニュアルを展開しています。
            </p>
            <a
              href="https://armada-alliance.com/"
              className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
            >
              More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alliance;
