import Head from 'next/head';
import PropTypes from 'prop-types';

export default function Layout({ children, userLoggedIn }) {
  return (
    <div>
      <Head>
        <title>Tulane Properties</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Tulane Properties</h1>
      {userLoggedIn && (
        <a className="logout" href="/logout">
          (Logout)
        </a>
      )}
      {children}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
      `}</style>
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
  children: PropTypes.element.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
};

Layout.defaultProps = {
  userLoggedIn: false,
};
