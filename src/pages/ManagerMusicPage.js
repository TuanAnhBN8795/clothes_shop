import React from 'react';
import ManagerMusicForm from '../components/ManagerForm';

const ManagerMusicPage = () => {
  const handleSubmit = values => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  };

  return (
    <div>
      <h3>Manager Music</h3>
      <ManagerMusicForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ManagerMusicPage;
