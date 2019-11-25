import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ onTextChanged }) => {
  const input = useRef(null);

  const handleChange = e => {
    e.preventDefault();
    const {
      current: { value },
    } = input || {};

    onTextChanged({ text: value });
  };

  return <input ref={input} type="text" onChange={handleChange} />;
};

TextInput.propTypes = {
  onTextChanged: PropTypes.func.isRequired,
};

export default TextInput;
