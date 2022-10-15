import { NextPage } from 'next';
import Link from 'next/link';

const Footer: NextPage = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content">
      <div>
        <p>&copy;CIEL Stake Pool</p>
      </div>
      <div>
        {/* <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a> */}
      </div>
      <div>
        <span className="footer-title">About us</span>
        <Link href="https://twitter.com/CIEL_Stake_Pool">
          <a className="link link-hover">Twitter</a>
        </Link>
        <Link href="https://github.com/449sabu">
          <a className="link link-hover">Github</a>
        </Link>
        {/* <a className="link link-hover">Privacy policy</a> */}
      </div>
      <div>
        <span className="footer-title">Pool stats</span>
        <Link href="https://pooltool.io/pool/88021ea76e8b0141feb976cccf0887a9a2385cc58370283c40abf06e/epochs">
          <a className="link link-hover">PoolTool.io</a>
        </Link>
        <Link href="https://cexplorer.io/pool/pool13qppafmw3vq5rl4ewmxv7zy84x3rshx9sdczs0zq40cxu0dqkrg">
          <a className="link link-hover">Cexplorer.io</a>
        </Link>
        <Link href="https://pool.pm/88021ea76e8b0141feb976cccf0887a9a2385cc58370283c40abf06e">
          <a className="link link-hover">Pool.pm</a>
        </Link>
        <Link href="https://poolpeek.com/pool/88021ea76e8b0141feb976cccf0887a9a2385cc58370283c40abf06e">
          <a className="link link-hover">Poolpeek.com</a>
        </Link>
        <Link href="https://cardanoscan.io/pool/88021ea76e8b0141feb976cccf0887a9a2385cc58370283c40abf06e">
          <a className="link link-hover">Cardanoscan.io</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
