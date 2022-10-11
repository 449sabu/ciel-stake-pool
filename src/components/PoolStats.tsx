import { NextPage } from 'next';

const PoolStats: NextPage = () => {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M5.999 17a3.014 3.014 0 0 1-1.873-.658a2.978 2.978 0 0 1-1.107-2.011a2.979 2.979 0 0 1 .639-2.206l4-5c.978-1.225 2.883-1.471 4.143-.523l1.674 1.254l2.184-2.729a3 3 0 1 1 4.682 3.747l-4 5c-.977 1.226-2.882 1.471-4.143.526l-1.674-1.256l-2.184 2.729A2.977 2.977 0 0 1 5.999 17zM10 8a.997.997 0 0 0-.781.374l-4 5.001a.99.99 0 0 0-.213.734c.03.266.161.504.369.67a.996.996 0 0 0 1.406-.155l3.395-4.244L13.4 12.8c.42.316 1.056.231 1.381-.176l4-5.001a.992.992 0 0 0 .213-.734a.994.994 0 0 0-.369-.67a.996.996 0 0 0-1.406.156l-3.395 4.242L10.6 8.2A.986.986 0 0 0 10 8zm9 13H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z"
            />
          </svg>
        </div>
        <div className="stat-title">Active Stake</div>
        <div className="stat-value">2.85k</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M9 14c1.381 0 2.631-.56 3.536-1.465C13.44 11.631 14 10.381 14 9s-.56-2.631-1.464-3.535C11.631 4.56 10.381 4 9 4s-2.631.56-3.536 1.465C4.56 6.369 4 7.619 4 9s.56 2.631 1.464 3.535A4.985 4.985 0 0 0 9 14zm0 7c3.518 0 6-1 6-2c0-2-2.354-4-6-4c-3.75 0-6 2-6 4c0 1 2.25 2 6 2zm12-9h-2v-2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2z"
            />
          </svg>
        </div>
        <div className="stat-title">Delegators</div>
        <div className="stat-value">5</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg width="32" height="32" viewBox="0 0 36 36">
            <path
              fill="currentColor"
              d="m33.53 18.76l-6.93-3.19V6.43a1 1 0 0 0-.6-.9l-7.5-3.45a1 1 0 0 0-.84 0l-7.5 3.45a1 1 0 0 0-.58.91v9.14l-6.9 3.18a1 1 0 0 0-.58.91v9.78a1 1 0 0 0 .58.91l7.5 3.45a1 1 0 0 0 .84 0l7.08-3.26l7.08 3.26a1 1 0 0 0 .84 0l7.5-3.45a1 1 0 0 0 .58-.91v-9.78a1 1 0 0 0-.57-.91Zm-2.81.91L25.61 22l-5.11-2.33l5.11-2.35ZM18.1 4.08l5.11 2.35l-5.11 2.35L13 6.43Zm-7.5 13.23l5.11 2.35L10.6 22l-5.11-2.33Zm6.5 11.49l-6.5 3l-6.5-3v-7.57L10.18 24a1 1 0 0 0 .82 0l6.08-2.8Zm-5.5-13.23V8l6.08 2.8a1 1 0 0 0 .84 0L24.6 8v7.58l-6.5 3Zm20.51 13.24l-6.5 3l-6.51-3v-7.59L25.19 24a1 1 0 0 0 .81 0l6.08-2.8Z"
            />
            <path fill="none" d="M0 0h36v36H0z" />
          </svg>
        </div>
        <div className="stat-title">Blocks Lifetime</div>
        <div className="stat-value">0</div>
        <div className="stat-desc">Lifetime ROA(0%)</div>
      </div>
    </div>
  );
};

export default PoolStats;
