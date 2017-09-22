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
};

const Marker = ({ children }) => <div style={TULANE_STYLE}>{children}</div>;

export default function Map() {
  return (
    <div className="container">
      <GoogleMapReact
        center={{ lng: -90.12072790000002, lat: 29.9403477 }}
        zoom={13}
      >
        <Marker lng={-90.12072790000002} lat={29.9403477}>
          Tulane University
        </Marker>
        <MapMarker lng={-90.09} lat={29.940349} />
      </GoogleMapReact>
      <style jsx>{`
        .container {
          width: 90%;
          height: 300px;
          margin: 20px 0;
        }
      `}</style>
    </div>
  );
}
