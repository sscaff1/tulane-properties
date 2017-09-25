import React, { Component } from 'react';
import { ViewPager, Frame, Track, View } from 'react-view-pager';

const animations = [
  {
    prop: 'scale',
    stops: [[-200, 0.85], [0, 1], [200, 0.85]],
  },
  {
    prop: 'opacity',
    stops: [[-200, 0.15], [0, 1], [200, 0.15]],
  },
];

export default class Slider extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.track.next(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="container">
        <ViewPager>
          <Frame>
            <Track
              ref={t => (this.track = t)}
              viewsToShow={3}
              infinite
              align={0.5}
              animations={animations}
            >
              <View tag="img" src="http://lorempixel.com/200/200?image=10" />
              <View tag="img" src="http://lorempixel.com/200/200?image=20" />
              <View tag="img" src="http://lorempixel.com/200/200?image=30" />
              <View tag="img" src="http://lorempixel.com/200/200?image=40" />
              <View tag="img" src="http://lorempixel.com/200/200?image=50" />
            </Track>
          </Frame>
        </ViewPager>
        <style jsx>{`
          .container {
            margin: 40px 0 20px;
          }
        `}</style>
      </div>
    );
  }
}
