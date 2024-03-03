import React from 'react';
import Card from './components/Card';

const App = () => {

  return (
    <div >
      <h1 className="bg-green-400 text-black p-4 rounded-2xl mb-4 w-[300px]">Tailwind Test</h1>

      <Card username='shristi' btnText = 'click me' />
      <Card username='Jack' btnText = 'Visit me'/>
      <Card username='Jerry'/>

    </div>
  );
}

export default App;
