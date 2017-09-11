import Link from 'next/link';

export default function Tile({ id, images, address, shortDesc, date }) {
  return (
    <Link as={`/property/${id}`} href={`/property?id=${id}`}>
      <div className="container">
        <h3>7017 Derbes Street</h3>
        <img src="https://unsplash.it/200/200" />
        <p className="description">Description is here of this house</p>
        <style jsx>{`
          h3,
          p {
            font-family: 'Open Sans';
          }
          .container {
            color: black;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.2s;
            border: 1px solid #000;
            border-radius: 5px;
            margin-bottom: 10px;
            padding: 0 5px;
            display: block;
            position: relative;
            text-align: center;
            width: 95%;
            margin: 0 auto;
          }
          @media (min-width: 700px) {
            .container {
              width: 30%;
            }
            .container:hover {
              transform: scale(1.05);
            }
          }
        `}</style>
      </div>
    </Link>
  );
}
