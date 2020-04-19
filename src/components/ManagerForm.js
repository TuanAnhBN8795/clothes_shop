import React from 'react';
import { Field, reduxForm } from 'redux-form';

import FieldFileInput from '../components/FieldFileInput';

const ManagerForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Music name</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Title"
          />
        </div>
      </div>
      <div>
        <label>Music name</label>
        <div>
          <Field
            name="artist"
            component="input"
            type="text"
            placeholder="Artist"
          />
        </div>
      </div>
      <div>
        <label>Music Input</label>
        <div>
          <Field
            name="music"
            component={FieldFileInput}
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'manager-music', // a unique identifier for this form
})(ManagerForm);
