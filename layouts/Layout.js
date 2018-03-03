import PropTypes from 'prop-types';
import Menu from './Menu';
import { FONT_FAMILY, GREEN, BLUE } from '../constants';

export default function Layout({ children, userLoggedIn, withMenu }) {
  return (
    <div className="container">
      <div className="topContainer">
        <h1>University Rentals</h1>
        <div className="slogan">
          <h3>Renovated Historic Homes in New Orleans</h3>
        </div>
      </div>
      {userLoggedIn && (
        <a className="logout" href="/logout">
          (Logout)
        </a>
      )}
      {withMenu && <Menu />}
      {children}
      <style jsx global>{`
        * {
          box-sizing: border-box;
          font-family: ${FONT_FAMILY};
          font-weight: lighter;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        p,
        label,
        ul {
          color: #fff;
        }
        body {
          margin: 0;
          background-color: #477e94;
        }
      `}</style>
      <style jsx>{`
        h1 {
          font-size: 36px;
          font-weight: normal;
        }
        .container {
          margin: 0;
          padding: 0;
        }
        .logout {
          color: #fff;
          position: absolute;
          top: 10px;
          right: 10px;
        }
        h1,
        h3 {
          padding: 0;
          text-align: center;
        }
        h3 {
          margin: 0;
        }
        .slogan {
          margin-bottom: 20px;
        }
        .topContainer {
          background-color: ${GREEN}
          padding: 10px 0;
          width: 100%;
          margin-top: 0;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
  withMenu: PropTypes.bool.isRequired,
};

Layout.defaultProps = {
  userLoggedIn: false,
  withMenu: false,
};
