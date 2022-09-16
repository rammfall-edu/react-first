import React, { useState } from 'react';
import Accordion from '../components/Accordion';

const Hooks = () => {
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState('');

  function countPlus() {
    setCounter((prevState) => {
      return prevState + 1;
    });
  }

  function countMinus() {
    setCounter((prevState) => {
      return prevState - 1;
    });
  }

  return (
    <div>
      <h1>{inputText}</h1>
      <button onClick={countPlus}>+</button>
      <span>{counter}</span>
      <button onClick={countMinus}>-</button>

      <Accordion
        textHead="Frontend"
        textBody="The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes."
      />
      <Accordion
        textHead="Backend"
        textBody=" react-router-native counterpart to useLinkClickHandler, useLinkPressHandler returns a press event handler for custom <Link> navigation"
      />
      <Accordion
        textHead="Design"
        textBody="The useInRouterContext hooks returns true if the component is being rendered in the context of a <Router>, false otherwise. This can be useful for some 3rd-party extensions that need to know if they are being rendered in the context of a React Router app"
      />

      <input
        type="text"
        onInput={({ target: { value } }) => {
          setInputText(value);
        }}
      />
    </div>
  );
};

export default Hooks;
