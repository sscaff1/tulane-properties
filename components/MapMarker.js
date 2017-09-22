const SIZE = 15;

const STYLE = {
  position: 'absolute',
  height: SIZE,
  width: SIZE,
  borderRadius: SIZE / 2,
  border: '2px solid #000',
  top: -SIZE / 2,
  left: -SIZE / 2,
  backgroundColor: 'green',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function MapMarker({ $hover }) {
  return <div style={STYLE} onClick={() => console.log('clicked')} />;
}
