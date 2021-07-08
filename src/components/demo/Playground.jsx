import React from 'react';
import { useStore } from 'nanostores/react';
import { getDefaultValues } from '../../util';

const Playground = ({
  Component,
  componentName,
  store,
  setProps,
}) => {
  const props = useStore(store);

  const updateProps = React.useCallback((name, type, value) => {
    setProps(name, type, value);
  }, []);

  const propNames = Object.keys(props);
  const propValues = getDefaultValues(props);

  return (
    <div className="ba bc-black-100 bs-sm bar-md mb32 overflow-hidden w100">
      <div className="bg-black-025 p16">
        <Component {...propValues} />
      </div>
      <div className="bt bc-black-100 p16">
        {propNames.map(prop => (
          <div key={prop} className="mt16">
            <label
              className="flex--item s-label"
              for={`demo-item-${componentName}-${prop}`}
            >
              {prop}
            </label>
            {props[prop]?.['data-description'] ? (
              <p class="s-description mt2">{props[prop]?.['data-description']}</p>
            ) : ''}
            <input
              id={`demo-item-${componentName}-${prop}`}
              className={props[prop]?.className || "s-input"}
              // TODO: Set this up to work with all inputs
              onChange={e => updateProps(prop, 'defaultValue', e.target.value)}
              {...props[prop]}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Playground;
