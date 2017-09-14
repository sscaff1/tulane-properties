import React, { Component } from 'react';
import { Layout } from '../../layouts';
import { PropertyForm } from '../../components';

const getBase64 = file =>
  new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = e => {
      resolve(e.target.result);
    };
    reader.readAsDataURL(file);
  });

export default class Manage extends Component {
  state = {
    bullets: [],
    photos: [],
  };

  onBulletEnter = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.setState({ bullets: [...this.state.bullets, e.target.value] });
      e.target.value = '';
    }
  };

  onBulletDelete = index => {
    const { bullets } = this.state;
    this.setState({
      bullets: [...bullets.slice(0, index), ...bullets.slice(index + 1)],
    });
  };

  onDrop = async files => {
    const promises = files.map(getBase64);
    const photos = await Promise.all(promises);
    this.setState({
      photos: [...this.state.photos, ...photos],
    });
  };

  render() {
    return (
      <Layout userLoggedIn>
        <PropertyForm
          bullets={this.state.bullets}
          onBulletEnter={this.onBulletEnter}
          onBulletDelete={this.onBulletDelete}
          photos={this.state.photos}
          onDrop={this.onDrop}
        />
      </Layout>
    );
  }
}
