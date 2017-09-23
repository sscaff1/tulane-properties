import PropTypes from 'prop-types';
import { Layout } from '../layouts';
import { Tile, Slider, Map, Filters } from '../components';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import { showAll } from '../actions/properties';

function Index({ properties }) {
  return (
    <Layout withMenu>
      <Slider />
      <h2 id="rent">For Rent</h2>
      <Map />
      <Filters />
      {properties.length > 0 &&
        properties.map(p => <Tile key={`property-${p._id}`} {...p} />)}
    </Layout>
  );
}

Index.propTypes = {
  properties: PropTypes.array.isRequired,
};

Index.getInitialProps = async ({ store, req }) => {
  await store.dispatch(showAll(req));
  return {};
};

const mapStateToProps = ({ properties }) => {
  return { properties: properties.properties };
};

export default withRedux(initStore, mapStateToProps)(Index);
