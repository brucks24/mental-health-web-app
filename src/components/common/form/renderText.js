import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const renderText = ({input, label, type, meta: {error, invalid}}) => (

    <TextField
        type={type}
        label={label}
        error={invalid}
        helperText={error}
        margin="normal"
        fullWidth={true}
        variant="outlined"
        {...input}
    />

);

renderText.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object
};

export default renderText;