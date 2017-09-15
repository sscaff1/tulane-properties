import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import Input from './Input';

const DROPDOWN_OPTIONS = ['1', '2', '3', '4', '5', '6+'];

class PropertyForm extends Component {
  static propTypes = {
    bullets: PropTypes.array.isRequired,
    onBulletEnter: PropTypes.func.isRequired,
    onBulletDelete: PropTypes.func.isRequired,
    photos: PropTypes.array.isRequired,
    onDrop: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const dropdown = new google.maps.places.Autocomplete(this.address);
    dropdown.addListener('place_changed', () => {
      const place = dropdown.getPlace();
      const { lat, lng } = place.geometry.location;
      this.lat.value = lat();
      this.lng.value = lng();
    });
  }

  onKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  getOptions = () => {
    return DROPDOWN_OPTIONS.map(o => (
      <option key={`option-${o}`} value={o}>
        {o}
      </option>
    ));
  };

  render() {
    const {
      bullets,
      onBulletEnter,
      onBulletDelete,
      photos,
      onDrop,
    } = this.props;
    return (
      <div className="wrap">
        <label>Photos</label>
        <Dropzone onDrop={onDrop} className="dropZone">
          Drop some photos here to upload
        </Dropzone>
        <div className="previewGroup">
          {photos.map((p, i) => (
            <img key={`photo-${i}`} src={p} className="preview" />
          ))}
        </div>
        <form method="POST" action="/api/admin/createProperty">
          <Input label="Name" name="name" />
          <Input
            inputRef={ref => (this.address = ref)}
            label="Address"
            name="address"
            onChange={this.onChangeAddress}
            onKeyDown={this.onKeyDown}
          />
          <Input
            inputRef={ref => (this.lng = ref)}
            name="location[coordinates][0]"
            type="hidden"
          />
          <Input
            inputRef={ref => (this.lat = ref)}
            name="location[coordinates][1]"
            type="hidden"
          />
          <Input
            inputType="textarea"
            label="Short Description"
            name="shortDescription"
          />
          <div className="group">
            <Input inputType="select" label="# of Bedrooms" name="bedrooms">
              {this.getOptions()}
            </Input>
            <Input inputType="select" label="# of Bathrooms" name="bathrooms">
              {this.getOptions()}
            </Input>
          </div>
          <Input label="Rental Price per Month" name="rentalPrice" />
          <Input
            label="Bullet Description"
            name="bullets"
            helperText="Hit enter to add bullet; click x to delete bullet"
            onKeyDown={onBulletEnter}
          />
          {bullets.length > 0 && (
            <ul>
              {bullets.map((b, i) => (
                <li key={`bullet-${i}`}>
                  {b}
                  <span className="delete" onClick={() => onBulletDelete(i)}>
                    &times;
                  </span>
                </li>
              ))}
            </ul>
          )}
          <Input type="submit" value="Add Property" />
        </form>
        <style jsx global>{`
          .dropZone {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            border: 2px dashed #000;
            background-color: #ccc;
            border-radius: 10px;
            width: 100%;
            height: 200px;
          }
        `}</style>
        <style jsx>{`
          .wrap {
            margin: 0 auto;
            width: 600px;
            padding: 20px;
            border: 1px solid black;
            border-radius: 10px;
          }
          .group {
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-around;
          }
          .delete {
            color: red;
            margin-left: 10px;
          }
          .preview {
            max-width: 30%;
            margin-top: 15px;
          }
          .previewGroup {
            align-items: center;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            flex: 1;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ photos, bullets }) => {
  return { photos, bullets };
};

export default connect(mapStateToProps)(PropertyForm);
