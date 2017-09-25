import PropTypes from 'prop-types';
import Menu from './Menu';
import { FONT_FAMILY, FONT_FAMILY_MAIN, GREEN, BLUE } from '../constants';

export default function Layout({ children, userLoggedIn, withMenu }) {
  return (
    <div className="container">
      <div className="topContainer">
        <h1>University Rentals</h1>
        <div className="contactInfo">
          <h3>Phone: ###-###-####</h3>
          <h3>Email: example@site.com</h3>
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
          font-family: ${FONT_FAMILY};
          color: #fff;
          font-weight: lighter;
        }
        body {
          margin: 0;
          background-color: #477e94;
        }
      `}</style>
      <style jsx>{`
        h1 {
          font-family: ${FONT_FAMILY_MAIN}
          font-size: 36px;
          font-weight: normal;
        }
        .container {
          align-items: center;
          display: flex;
          flex-direction: column;
        }
        .logout {
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
        .contactInfo {
          margin-bottom: 20px;
        }
        .topContainer {
          background-color: ${GREEN}
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
