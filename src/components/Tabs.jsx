
import React from 'react';
import Navigation from '../components/react/Navigation.jsx';
import NavigationItem from '../components/react/NavigationItem.jsx';
import NavigationTitle from '../components/react/NavigationTitle.jsx';

const tabs = [
  {
    label: 'HTML',
  }, {
    label: 'React',
    selected: true,
  }, {
    label: 'Preact',
  }, {
    label: 'Svelte',
  }, {
    label: 'Vue',
  },
]

export default function Tabs () {
  return (
    <Navigation className="fs-fine">
      {tabs.map(tab => {
        return (
          <NavigationItem
            key={tab.label}
            className={tab.selected ? 'is-selected' : ''}
          >
            {tab.label}
          </NavigationItem>
        );
      })}
    </Navigation>
  )
}
