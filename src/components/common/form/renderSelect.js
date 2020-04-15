import React from 'react';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";
import { Field, reduxForm, Form } from "redux-form";

function renderSelect(props) {
  const {
    input,
    label,
    labelWidth,
    inputLabel,
    classes,
    meta: { touched, error },
    children,
    ...custom
  } = props;

  return (
    <FormControl
      variant="outlined"
      error={touched && error}
      className={classes.formControl}
    >
      <InputLabel ref={inputLabel} id="simple-select-label">
        {label}
      </InputLabel>
      <Select
        {...input}
        {...custom}
        labelId="simple-select-label"
        id="simple-select"
        labelWidth={labelWidth}
      >
        {children}
      </Select>
    </FormControl>
  );
}

export default renderSelect;
