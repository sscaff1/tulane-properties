import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { Layout } from '../../layouts';
import { PropertyForm } from '../../components';
import initStore from '../../store';

class Manage extends Component {
  render() {
    return (
      <Layout userLoggedIn>
        <PropertyForm />
      </Layout>
    );
  }
}

export default withRedux(initStore)(Manage);
