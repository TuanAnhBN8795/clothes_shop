import React from 'react'

const MusicFileInput  = props => {
  const handleOnChange = (e) => {
    e.preventDefault();
    const { input: { onChange } } = props;
    onChange(e.target.files[0]);
  };

  return (
    <input
      type='file'
      accept='audio/*'
      onChange={handleOnChange}
    />
  )
};

export default MusicFileInput;