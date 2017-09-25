import Link from 'next/link';
import { BLUE } from '../constants';

export default function Menu() {
  return (
    <nav>
      <div className="link">
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className="link">
        <a href="#rent">For Rent</a>
      </div>
      <div className="link">
        <Link prefetch href="/contact">
          <a>Contact Us</a>
        </Link>
      </div>

      <style jsx>{`
        a {
          margin: 0 10px;
          font-size: 24px;
          text-decoration: none;
          text-transform: uppercase;
          color: #fff;
        }
        a:hover {
          color: ${BLUE};
          transform: scale(1.2);
        }
        .link {
          text-align: center;
          width: 20%;
        }
        nav {
          display: flex;
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </nav>
  );
}
