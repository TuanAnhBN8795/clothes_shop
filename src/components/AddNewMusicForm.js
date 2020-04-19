import React from 'react';
import { Field, reduxForm } from 'redux-form';

import PdfFileInput from '../components/PdfFileInput';
import MusicFileInput from '../components/MusicFileInput';

const AddNewMusicForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tên bài nhạc:</label>
        <div>
          <Field
            name="musicTitle"
            component="input"
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
          />
        </div>
      </div>

      <div>
        <label>Giá sản phẩm:</label>
        <div>
          <Field
            name="musicPrice"
            component="input"
            type="number"
            placeholder="Nhập giá sản phẩm"
          />
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'add-new-music',
})(AddNewMusicForm);
