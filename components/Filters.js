import { connect } from 'react-redux';
import { BLUE, GREEN } from '../constants';
import {
  showAll,
  sort,
  selectBedroom,
  sorts,
  filters as filtersList,
} from '../actions/properties';

function Filter({ onClick, label, className }) {
  return (
    <div onClick={onClick} className={className}>
      {label}
      <style jsx>{`
        div {
          border: 2px solid #fff;
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
          border-color: ${GREEN};
        }
        .active,
        .active:hover {
          border: 2px solid ${BLUE};
          background-color: ${BLUE};
        }
      `}</style>
    </div>
  );
}

function Filters({ filters, clearFilters, bedroomFilter, sortProperties }) {
  const getOtherProps = num => ({
    onClick(e) {
      e.preventDefault();
      bedroomFilter(num);
    },
    className: filters.includes(filtersList[num]) ? 'active' : '',
  });
  return (
    <div className="container">
      <Filter label="All Properties" onClick={clearFilters} />
      <Filter label="1 Bedroom" {...getOtherProps(1)} />
      <Filter label="2 Bedroom" {...getOtherProps(2)} />
      <Filter label="3 Bedroom" {...getOtherProps(3)} />
      <Filter label="4 Bedroom" {...getOtherProps(4)} />
      <Filter label="5 Bedroom" {...getOtherProps(5)} />
      <Filter label="6+ Bedroom" {...getOtherProps(6)} />
      <Filter
        label="Sort By Distance to Campus"
        action={() => sortProperties(sorts.DISTANCE)}
      />
      <Filter
        label="Sort By Price per Bedroom"
        action={() => sortProperties(sorts.PRICE)}
      />
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
  sort: properties.sort,
});

const mapDispatchToProps = dispatch => {
  return {
    clearFilters() {
      dispatch(showAll());
    },
    bedroomFilter(num) {
      dispatch(selectBedroom(num));
    },
    sortProperties(field) {
      dispatch(sort(field));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
