import { connect } from 'react-redux';
import { BLUE, GREEN } from '../constants';

function Filter({ onClick, label, className }) {
  return (
    <div onClick={onClick} className={className}>
      {label}
      <style jsx>{`
        div {
          border: 2px dashed ${BLUE};
          border-radius: 5px;
          padding: 10px 0;
          font-size: 14px;
          width: 30%;
          text-align: center;
          cursor: pointer;
          margin-bottom: 15px;
        }
        div:hover {
          color: white;
          background-color: ${GREEN};
        }
        .active,
        .active:hover {
          background-color: ${BLUE};
        }
      `}</style>
    </div>
  );
}

function Filters({ filters }) {
  return (
    <div className="container">
      <Filter label="All Properties" action={() => console.log('help')} />
      <Filter label="1 Bedroom" action={() => console.log('help')} />
      <Filter label="2 Bedroom" action={() => console.log('help')} />
      <Filter label="3 Bedroom" action={() => console.log('help')} />
      <Filter label="4 Bedroom" action={() => console.log('help')} />
      <Filter label="5 Bedroom" action={() => console.log('help')} />
      <Filter label="6+ Bedroom" action={() => console.log('help')} />
      <Filter
        label="Sort By Distance to Campus"
        action={() => console.log('help')}
      />
      <Filter label="Sort By Price" action={() => console.log('help')} />
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          width: 95%;
        }
      `}</style>
    </div>
  );
}

const mapStateToProps = ({ properties }) => ({
  filters: properties.filters,
});

export default connect(mapStateToProps)(Filters);
