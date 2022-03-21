import * as React from 'react';
import { useState } from 'react';

import './Tutorial.css';
import Counter from '../Counter';
import Display from '../Display';

function Tutorial() {
  const [counter, setCounter] = useState(0);
  const handleclick = function (increment: number) {
    setCounter(counter + increment);
  }
  return (
    <React.Fragment>
      <div className='Header'>Tutorial with Counters</div>
      <Counter counter={counter} handleclick={handleclick} increment={1}></Counter>
      <Counter counter={counter} handleclick={handleclick} increment={2}></Counter>
      <Counter counter={counter} handleclick={handleclick} increment={3}></Counter>
      <Counter counter={counter} handleclick={handleclick} increment={4}></Counter>
      <Display message={'Current Counter value is: ' + counter} />
    </React.Fragment> 
  );
}

export default Tutorial;
