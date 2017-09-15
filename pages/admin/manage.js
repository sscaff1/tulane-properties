import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { Layout } from '../../layouts';
import { PropertyForm } from '../../components';
import initStore from '../../store';
import { savePictures } from '../../actions/photos';
import { addBullet, deleteBullet } from '../../actions/bullets';

class Manage extends Component {
  static propTypes = {
    onDrop: PropTypes.func.isRequired,
    addBullet: PropTypes.func.isRequired,
    deleteBullet: PropTypes.func.isRequired,
  };
  onBulletEnter = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.addBullet(e.target.value);
      e.target.value = '';
    }
  };

  render() {
    return (
      <Layout userLoggedIn>
        <PropertyForm
          onBulletEnter={this.onBulletEnter}
          onBulletDelete={this.props.deleteBullet}
          onDrop={this.props.onDrop}
        />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDrop(files) {
      dispatch(savePictures(files));
    },
    addBullet(text) {
      dispatch(addBullet(text));
    },
    deleteBullet(index) {
      dispatch(deleteBullet(index));
    },
  };
};

export default withRedux(initStore, null, mapDispatchToProps)(Manage);
