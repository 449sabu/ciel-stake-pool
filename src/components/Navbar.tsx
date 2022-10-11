import { NextPage } from "next";
import Link from "next/link";

const Navbar: NextPage = () => {
	return (
		<div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
			<div className="flex justify-between items-center md:mb-1 xl:mb-1 py-4">
				{/* <!-- logo - start --> */}
				<p
					className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
					aria-label="logo"
				>
					CIEL Stake Pool
				</p>
				{/* <!-- nav - end --> */}
				<nav className="hidden lg:flex gap-12">
					<Link href="/">
						<a className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
							HOME
						</a>
					</Link>
					<Link href="/blog">
						<a className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
							Blog
						</a>
					</Link>
				</nav>
				{/* <!-- buttons - start --> */}
				<a
					href="#"
					className="hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
				>
					Connect Wallet
				</a>
        {/* ドロップダウンメニュー */}
				<div className="dropdown dropdown-end lg:hidden  focus-visible:ring ring-indigo-300 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
					<label tabIndex={0} className="btn m-1">
          <svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clipRule="evenodd"
						/>
					</svg>
						MENU
					</label>
					<ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
						<li>
            <Link href="/">HOME</Link>
						</li>
						<li>
            <Link href="/blog">BLOG</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
