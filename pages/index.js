import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { Layout } from '../layouts';
import { Tile, Slider, Map, Filters } from '../components';
import initStore from '../store';
import { showAll } from '../actions/properties';

function Index({ properties }) {
  return (
    <div>
      <Layout withMenu>
        <Slider />
        <h2 id="rent">For Rent</h2>
        <Map />
        {properties.length > 0 && properties.map(p => <Tile key={`property-${p._id}`} {...p} />)}
      </Layout>
      <style jsx>{`
        h2 {
          text-align: center;
        }
      `}</style>
    </div>
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
