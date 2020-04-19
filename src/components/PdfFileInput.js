import React from 'react';
import styled from 'styled-components/macro';

const PdfInput = styled.input`
  margin-top: 10px;
  min-width: 300px;
  padding: 6px 12px;
  border: 1px solid #ccc;
  font-size: 14px;
  display: inline-block;
`;

const PdfFileInput  = props => {
  const handleOnChange = (e) => {
    e.preventDefault();
    const { input: { onChange } } = props;
    onChange(e.target.files[0]);
  };

  return (
    <PdfInput
      type='file'
      accept='application/pdf'
      onChange={handleOnChange}
    />
  )
};

export default PdfFileInput;