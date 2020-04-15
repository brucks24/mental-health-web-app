import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const selectText = ({ value, onChange, helperText, meta: { touched, error } }) => (
    <div>
        <InputLabel>I am a</InputLabel>
        <Select
            value={value}
            onChange={onChange}
            variant='outlined'
            error={touched && error}
        >
            <MenuItem value="0">Student</MenuItem>
            <MenuItem value="1">Coach</MenuItem>
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
    </div>
);

selectText.propTypes = {
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    meta: PropTypes.object
};

export default selectText;