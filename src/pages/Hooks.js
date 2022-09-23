import React, { useState } from 'react';
import Accordion from '../components/Accordion';

const Hooks = () => {
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState('');
  const [openedCount, setOpenedCount] = useState(-1);
  const data = [
    {
      title: 'Declarative',
      body:
        'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.\n' +
        '\n' +
        'Declarative views make your code more predictable and easier to debug.',
    },
    {
      title: 'Component-Based',
      body: `Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.`,
    },
    {
      title: 'Learn Once, Write Anywhere',
      body: 'We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.',
    },
  ];

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

      <div className="accordion-wrapper">
        {data.map(({ title, body }, index) => {
          return (
            <div className="accordion" key={title}>
              <div
                className="accordion__head"
                onClick={() => {
                  setOpenedCount(index);
                }}
              >
                {title}
              </div>

              {index === openedCount && (
                <div className="accordion__body">
                  {body}
                </div>
              )}
            </div>
          );
        })}
      </div>

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
