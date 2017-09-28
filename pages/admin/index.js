import PropTypes from 'prop-types';
import { Layout } from '../../layouts';
import { Input } from '../../components';

function Admin({ errors }) {
  return (
    <Layout>
      <form method="POST" action="/api/admin/login">
        <h2>Admin Login</h2>
        {errors.length > 0 && <h3>{errors[0]}</h3>}
        <Input label="Username" name="username" type="text" />
        <Input label="Password" name="password" type="password" />
        <Input type="submit" value="Login" />
      </form>
      <style jsx>{`
        h2,
        h3 {
          text-align: center;
          margin: 0 0 10px;
        }
        h3 {
          color: red;
        }
        form {
          margin: 0 auto;
          width: 300px;
          padding: 20px;
          border: 1px solid black;
          border-radius: 10px;
        }
      `}</style>
    </Layout>
  );
}

Admin.propTypes = {
  errors: PropTypes.array.isRequired,
};

Admin.getInitialProps = async ({ req }) => {
  return {
    errors: req.flash().error || [],
  };
};

export default Admin;
