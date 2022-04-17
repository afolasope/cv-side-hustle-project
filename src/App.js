import React from 'react';
import EduExp from './components/EduExp';
import GeneralInfo from './components/GeneralInfo';
import PracticalExp from './components/PracticalExp';

function App() {
  return (
    <main>
      <GeneralInfo />
      <EduExp />
      <PracticalExp />
    </main>
  );
}

export default App;
