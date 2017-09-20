import Link from 'next/link';

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
        }
      `}</style>
    </nav>
  );
}
