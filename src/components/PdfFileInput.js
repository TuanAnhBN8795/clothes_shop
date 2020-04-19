import React from 'react'

const PdfFileInput  = props => {
  const handleOnChange = (e) => {
    e.preventDefault();
    const { input: { onChange } } = props;
    onChange(e.target.files[0]);
  };

  return (
    <input
      type='file'
      accept='application/pdf'
      onChange={handleOnChange}
    />
  )
};

export default PdfFileInput;