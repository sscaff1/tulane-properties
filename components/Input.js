import PropTypes from 'prop-types';

export default function Input({ name, type, label }) {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input name={name} type={type} />
      <style jsx>{`
        label,
        input {
          display: block;
          width: 100%;
        }
        input {
          padding: 10px 5px;
          border-radius: 5px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
};
