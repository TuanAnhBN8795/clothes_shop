import React from 'react'
import styled from 'styled-components/macro';

const MusicInput = styled.input`
  margin-top: 10px;
  min-width: 300px;
  padding: 6px 12px;
  border: 1px solid #ccc;
  font-size: 14px;
  display: inline-block;
`;

const MusicFileInput  = props => {
  const handleOnChange = (e) => {
    e.preventDefault();
    const { input: { onChange } } = props;
    onChange(e.target.files[0]);
  };

  return (
    <MusicInput
      type='file'
      accept='audio/*'
      onChange={handleOnChange}
    />
  )
};

export default MusicFileInput;