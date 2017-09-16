import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { Layout } from '../../layouts';
import { PropertyForm } from '../../components';
import initStore from '../../store';

class Manage extends Component {
  static async getInitialProps({ req }) {
    const prefix = req
      ? `${req.protocol}://${req.get('Host')}`
      : window.location.origin;
    const propertiesJson = await fetch(`${prefix}/api/getProperties`);
    const properties = await propertiesJson.json();
    return { properties };
  }

  render() {
    return (
      <Layout userLoggedIn>
        <PropertyForm />
      </Layout>
    );
  }
}

export default withRedux(initStore)(Manage);
