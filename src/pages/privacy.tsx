import type { NextPage } from "next";
import Head from "next/head";

const Privacy: NextPage = () => {
	return (
		<>
			<Head>
				<title>CIEL</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="hero min-h-screen bg-gradient-to-br from-green-300 via-blue-500 to-purple-600">
				<div className="hero-content text-center">
					<div className="">
						<h1 className="text-5xl font-bold py-12">プライバシーポリシー</h1>
						<p className="py-6 max-w-2xl">
              当サイトは、情報提供をするにあたり取得したユーザーの個人情報当の取り扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
						</p>
            <div>
              <p className="text-2xl pb-3 max-w-2xl">運営者情報</p>
              <p className="pb-6 max-w-2xl">
              運営者 : Yoshiki <br />
              サイトURL : <a href="https://www.cielstakepool.com/" className="font-bold link link-hover">https://www.cielstakepool.com/</a>

              </p>
            </div>
            <div>
              <p className="text-2xl pb-3 max-w-2xl">個人情報収集の目的</p>
              <p className="pb-6 max-w-2xl">
              当サイトでは、訪問者へ提供するコンテンツの質を改善することを目的とした個人情報の取得を行う場合があります。
              収集した個人情報は、漏えいや滅失又は棄損を防止するため適切な管理を徹底し、不要となった場合は速やかに廃棄いたします。
              </p>
            </div>
            <div>
              <p className="text-2xl pb-3 max-w-2xl">アナリティクス</p>
              <p className="pb-6 max-w-2xl">
              当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
              このGoogleアナリティクスはアクセス情報の収集のためにCookieを使用しています。このアクセス情報は匿名で収集されており、個人を特定するものではありません。<br />
              GoogleアナリティクスのCookieは、26ヶ月間保持されます。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
              Googleアナリティクスの利用規約に関して確認したい場合は、<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" className="font-bold link link-hover">ここをクリック</a>してください。<br />
              また、「ユーザーがGoogleパートナーのサイトやアプリを使用する際のGoogleによるデータ使用」に関して確認したい場合は、
              <a href="https://policies.google.com/technologies/partner-sites?hl=ja" className="font-bold link link-hover">ここをクリック</a>してください。
              </p>
            </div>
            <div>
              <p className="text-2xl pb-3 max-w-2xl">プライバシーポリシーの変更について</p>
              <p className="pb-6 max-w-2xl">
              当サイトは、個人情報等の取扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、本ポリシーを変更することがあります。
              変更した場合には、本サイトに掲載する方法で通知いたします。
              </p>
            </div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Privacy;
