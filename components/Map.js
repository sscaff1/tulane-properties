import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';

const MARKER_SIZE = 40;
const TULANE_STYLE = {
  position: 'absolute',
  width: MARKER_SIZE,
  height: MARKER_SIZE,
  left: -MARKER_SIZE / 2,
  top: -MARKER_SIZE / 2,
  textAlign: 'center',
  color: 'black',
};

const Tulane = ({ children }) => <div style={TULANE_STYLE}>{children}</div>;

function Map({ properties }) {
  return (
    <div className="container">
      <GoogleMapReact center={{ lng: -90.12072790000002, lat: 29.9403477 }} zoom={15}>
        <Tulane lng={-90.12072790000002} lat={29.9403477}>
          Tulane University
        </Tulane>
        {properties.map((p, i) => (
          <MapMarker
            key={`mappedProperty-${i}`}
            index={i}
            lng={p.location.coordinates[0]}
            lat={p.location.coordinates[1]}
          />
        ))}
      </GoogleMapReact>
      <style jsx>{`
        .container {
          width: 90%;
          height: 300px;
          margin: 20px auto;
        }
      `}</style>
    </div>
  );
}

Map.propTypes = {
  properties: PropTypes.array.isRequired,
};

const mapStateToProps = ({ properties }) => ({
  properties: properties.properties,
});

export default connect(mapStateToProps)(Map);
