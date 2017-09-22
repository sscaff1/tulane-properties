import PropTypes from 'prop-types';
import { Layout } from '../layouts';
import { Tile, Slider, Map } from '../components';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import { clearFilters } from '../actions/filters';

function Index({ properties }) {
  return (
    <Layout withMenu>
      <Slider />
      <Map serverProperties={properties} />
      {properties.length > 0 &&
        properties.map(p => <Tile key={`property-${p._id}`} {...p} />)}
    </Layout>
  );
}

Index.propTypes = {
  properties: PropTypes.array.isRequired,
};

Index.getInitialProps = async ({ store, req }) => {
  await store.dispatch(clearFilters(req));
  return {};
};

const mapStateToProps = ({ filters }) => {
  return { properties: filters };
};

export default withRedux(initStore, mapStateToProps)(Index);
