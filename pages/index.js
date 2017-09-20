import PropTypes from 'prop-types';
import { Layout } from '../layouts';
import { Tile, Slider, Map } from '../components';

export default function Index({ properties }) {
  return (
    <Layout withMenu>
      <Slider />
      <Map />
      {properties.length > 0 &&
        properties.map(p => <Tile key={`property-${p._id}`} {...p} />)}
    </Layout>
  );
}

Index.propTypes = {
  properties: PropTypes.array.isRequired,
};

Index.getInitialProps = async ({ req }) => {
  const prefix = req
    ? `${req.protocol}://${req.get('Host')}`
    : window.location.origin;
  const propertiesJson = await fetch(`${prefix}/api/getProperties`);
  const properties = await propertiesJson.json();
  return { properties };
};
