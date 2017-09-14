import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  static propType = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    inputRef: PropTypes.func.isRequired,
    wrapClass: PropTypes.string,
    helperText: PropTypes.string,
  };

  static defaultProps = {
    inputType: 'input',
    type: 'text',
    wrapClass: 'container',
    helperText: '',
  };

  getInputType = inputProps => {
    switch (this.props.inputType) {
      case 'select':
        return <select {...inputProps} />;
      case 'textarea':
        return <textarea {...inputProps} />;
      case 'input':
      default:
        return <input {...inputProps} />;
    }
  };

  render() {
    const {
      name,
      type,
      label,
      inputRef,
      inputType,
      wrapClass,
      helperText,
      ...props
    } = this.props;
    const inputProps = {
      name,
      type,
      ref: inputRef,
      ...props,
    };
    return (
      <div className={wrapClass}>
        {label && <label htmlFor={name}>{label}</label>}
        {this.getInputType(inputProps)}
        <p>{helperText}</p>
        <style jsx global>{`
          label,
          input,
          textarea,
          select {
            display: block;
            width: 100%;
          }
          input,
          textarea,
          select {
            padding: 10px 5px;
            border-radius: 5px;
          }
          input[type='submit'] {
            background-color: deepskyblue;
            color: white;
            border: 0;
            font-size: 16px;
          }
        `}</style>
        <style jsx>{`
          .container {
            margin-top: 20px;
          }
          .noMargin {
            margin-top: 0;
          }
          p {
            margin: 0;
            padding: 0;
            font-style: italic;
          }
        `}</style>
      </div>
    );
  }
}
