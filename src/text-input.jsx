import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ onTextChanged, label }) => {
  const input = useRef(null);

  const handleChange = e => {
    e.preventDefault();
    const {
      current: { value },
    } = input || {};

    onTextChanged({ text: value });
  };

  return (
    <TextField
      inputRef={input}
      type="text"
      onChange={handleChange}
      label={label}
      margin="normal"
      variant="outlined"
      fullWidth
    />
  );
};

TextInput.defaultProps = {
  label: '',
};

TextInput.propTypes = {
  onTextChanged: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default TextInput;
