import Link from 'next/link';

const roundDistance = distance => {
  return Math.round(distance * 100) / 100;
};

export default function Tile({
  location,
  description,
  bathrooms,
  bedrooms,
  slug,
  photos,
  price,
  distanceToCampus,
}) {
  return (
    <Link as={`/property/${slug}`} href={`/property?slug=${slug}`}>
      <div className="container">
        <div className="photoContainer">
          {photos.map((p, i) => {
            const style = {
              top: i * 5,
              left: i * 5,
              zIndex: -1 * i,
              transform: `rotate(${p.rotate}deg)`,
            };
            return <img key={`prophoto-${i}`} src={p.location} style={style} />;
          })}
        </div>
        <div className="description">
          <div className="top">
            <h3>{location.address}</h3>
            <p>{description}</p>
          </div>
          <h3>Rental Info</h3>
          <ul>
            <li>Bathrooms: {bathrooms}</li>
            <li>Bedrooms: {bedrooms}</li>
            <li>Price: ${price}</li>
            <li>Price/Bedroom: ${Math.floor(price / bedrooms)}</li>
            <li>
              Distance from Campus: {roundDistance(distanceToCampus)} miles
            </li>
          </ul>
        </div>
        <style jsx>{`
          img {
            max-width: 100%;
            max-height: 95%;
            width: auto;
            height: auto;
          }
          .photoContainer {
            position: relative;
            max-width: 30%;
            max-height: 95%;
          }
          img:not(:first-child) {
            position: absolute;
          }
          h3,
          p {
            font-family: 'Open Sans';
          }
          .container {
            padding: 5px;
            color: black;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.2s;
            border: 1px solid #000;
            border-radius: 5px;
            margin-bottom: 10px;
            display: flex;
            position: relative;
            width: 95%;
            margin: 0 auto;
          }
          .description {
            padding-top: 20px;
            margin-left: 25px;
            display: flex;
            flex: 0.8;
            flex-direction: column;
            align-items: flex-start;
          }
          h3,
          p {
            margin: 0;
          }
          .top {
            margin-bottom: 20px;
          }
        `}</style>
      </div>
    </Link>
  );
}
