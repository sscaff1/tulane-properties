import Link from 'next/link';
import { BLUE, GREEN } from '../constants';

export default function Menu() {
  return (
    <nav>
      <Link prefetch href="/">
        <a>Home</a>
      </Link>
      <a href="#rent">For Rent</a>
      <Link prefetch href="/contact">
        <a>Contact Us</a>
      </Link>
      <style jsx>{`
        a {
          margin: 0 10px;
          font-size: 24px;
          text-decoration: none;
          color: ${BLUE};
        }
        a:hover {
          color: ${GREEN};
          transform: scale(1.2);
        }
      `}</style>
    </nav>
  );
}
