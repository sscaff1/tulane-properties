import PropTypes from 'prop-types';

export default function Layout({ children, userLoggedIn }) {
  return (
    <div>
      <h1>Tulane Properties</h1>
      {userLoggedIn && (
        <a className="logout" href="/logout">
          (Logout)
        </a>
      )}
      {children}
      <style jsx>{`
        h1 {
          text-align: center;
        }
        .logout {
          position: absolute;
          top: 10px;
          right: 10px;
        }
      `}</style>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
};

Layout.defaultProps = {
  userLoggedIn: false,
};
