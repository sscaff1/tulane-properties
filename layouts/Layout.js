import PropTypes from 'prop-types';
import Menu from './Menu';

export default function Layout({ children, userLoggedIn, withMenu }) {
  return (
    <div className="container">
      <h1>University Rentals</h1>
      <div className="contactInfo">
        <h3>Phone: ###-###-####</h3>
        <h3>Email: example@site.com</h3>
      </div>
      {userLoggedIn && (
        <a className="logout" href="/logout">
          (Logout)
        </a>
      )}
      {withMenu && <Menu />}
      {children}
      <style jsx>{`
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
          margin: 0;
          padding: 0;
          text-align: center;
        }
        .contactInfo {
          margin-bottom: 10px;
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
