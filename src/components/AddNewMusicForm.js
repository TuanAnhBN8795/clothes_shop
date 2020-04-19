import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';

import PdfFileInput from '../components/PdfFileInput';
import MusicFileInput from '../components/MusicFileInput';

const required = value => {
  return value || typeof value === 'number' ? undefined : 'Field required!'
};

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength5 = maxLength(5);

const renderField = ({
   input,
   label,
   type,
   meta: { touched, error, warning }
 }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const AddNewMusicForm = props => {
  const [isFree, setIsFree] = useState(false);

  const handleChangeIsFree = () => {
    setIsFree(!isFree);
  };

  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tên bài nhạc:</label>
        <div>
          <Field
            name="musicTitle"
            component={renderField}
            validate={[required, maxLength5]}
            type="text"
            placeholder="Nhập tên bài nhạc"
          />
        </div>
      </div>

      <div>
        <label>File nhạc mp3:</label>
        <div>
          <Field
            name="musicMp3File"
            component={MusicFileInput}
          />
        </div>
      </div>

      <div>
        <label>File pdf:</label>
        <div>
          <Field
            name="musicPdfFile"
            component={PdfFileInput}
          />
        </div>
      </div>

      <div>
        <label>Link Youtube:</label>
        <div>
          <Field
            name="musicYoutubeUrl"
            component="input"
            type="text"
            placeholder="Nhập link Youtube"
          />
        </div>
      </div>

      <div>
        <label htmlFor="isFree">Is Free?</label>
        <div>
          <Field
            name="isFree"
            id="isFree"
            component="input"
            type="checkbox"
            onChange={handleChangeIsFree}
          />
        </div>
      </div>

      {!isFree && <div>
        <label>Giá sản phẩm:</label>
        <div>
          <Field
            name="musicPrice"
            component="input"
            type="number"
            placeholder="Nhập giá sản phẩm"
          />
        </div>
      </div>}

      <div>
        <button type="submit" disabled={submitting}>Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'add-new-music',
})(AddNewMusicForm);
