import { ViewPager, Frame, Track, View } from 'react-view-pager';
import { Layout } from '../layouts';

const roundDistance = distance => {
  return Math.round(distance * 100) / 100;
};

export default function Property({ property }) {
  return (
    <Layout withMenu>
      <div className="container">
        <ViewPager className="pager">
          <Frame>
            <Track viewsToShow={1} infinite>
              {property.photos.map((p, i) => (
                <View key={`photo-${i}`} tag="img" src={p.location} />
              ))}
            </Track>
          </Frame>
        </ViewPager>
        <div className="description">
          <div className="top">
            <h3>{property.location.address}</h3>
            <p>{property.description}</p>
          </div>
          <h3>Rental Info</h3>
          <ul>
            <li>Bathrooms: {property.bathrooms}</li>
            <li>Bedrooms: {property.bedrooms}</li>
            <li>Price: ${property.price}</li>
            <li>
              Price/Bedroom: ${Math.floor(property.price / property.bedrooms)}
            </li>
            <li>
              Distance from Campus: {roundDistance(
                property.distanceToCampus
              )}{' '}
              miles
            </li>
          </ul>
          <h3>Features</h3>
          <ul>
            {property.bullets.map((b, i) => <li key={`bullet-${i}`}>{b}</li>)}
          </ul>
        </div>
      </div>
      <style jsx global>{`
        .pager {
          max-width: 50%;
        }
      `}</style>
      <style jsx>{`
        .container {
          display: flex;
          margin-top: 40px;
        }
        .description {
          margin-left: 40px;
        }
      `}</style>
    </Layout>
  );
}

Property.getInitialProps = async ({ query, req }) => {
  const { slug } = query;
  const prefix = req
    ? `${req.protocol}://${req.get('Host')}`
    : window.location.origin;
  const res = await fetch(`${prefix}/api/getProperty/${slug}`);
  const property = await res.json();
  return { property };
};
