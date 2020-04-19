import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components/macro';

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
   placeholder,
   type,
   meta: { touched, error, warning }
 }) => (
  <div>
    <label>{label}</label>
    <div>
      <TextInputStyled {...input} placeholder={placeholder} type={type} />
      {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const FormStyled = styled.form`
  padding: 30px;
`;

const BlockInputStyled = styled.div`
  margin-bottom: 10px;
`;

const TextInputFieldStyled = styled(Field)`
  margin-top: 10px;
  min-width: 300px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const TextInputStyled = styled.input`
  margin-top: 10px;
  min-width: 300px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const SubmitButtonStyled = styled.button`
  padding: 8px 12px;
  border: none;
  background-color: ${props => props.disabled ? '#2ecc71' : '#e74c3c'};
  font-size: 14px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const AddNewMusicForm = props => {
  const [isFree, setIsFree] = useState(false);

  const handleChangeIsFree = () => {
    setIsFree(!isFree);
  };

  const { handleSubmit, submitting, pristine } = props;
  return (
    <FormStyled onSubmit={handleSubmit}>
      <BlockInputStyled>
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
      </BlockInputStyled>

      <BlockInputStyled>
        <label>File nhạc mp3:</label>
        <div>
          <Field
            name="musicMp3File"
            component={MusicFileInput}
          />
        </div>
      </BlockInputStyled>

      <BlockInputStyled>
        <label>File pdf:</label>
        <div>
          <Field
            name="musicPdfFile"
            component={PdfFileInput}
          />
        </div>
      </BlockInputStyled>

      <BlockInputStyled>
        <label>Link Youtube:</label>
        <div>
          <TextInputFieldStyled
            name="musicYoutubeUrl"
            component="input"
            type="text"
            placeholder="Nhập link Youtube"
          />
        </div>
      </BlockInputStyled>

      <BlockInputStyled>
        <label htmlFor="isFree">Is Free:</label>
        <div>
          <Field
            name="isFree"
            id="isFree"
            component="input"
            type="checkbox"
            onChange={handleChangeIsFree}
          />
        </div>
      </BlockInputStyled>

      {!isFree && <BlockInputStyled>
        <label>Giá sản phẩm:</label>
        <div>
          <TextInputFieldStyled
            name="musicPrice"
            component="input"
            type="number"
            placeholder="Nhập giá sản phẩm"
          />
        </div>
      </BlockInputStyled>}

      <BlockInputStyled>
        <SubmitButtonStyled
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </SubmitButtonStyled>
      </BlockInputStyled>
    </FormStyled>
  );
};

export default reduxForm({
  form: 'add-new-music',
})(AddNewMusicForm);
