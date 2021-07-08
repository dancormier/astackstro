
import React from 'react';
import { useStore } from 'nanostores/react';
import { activeTab, setActiveTab } from '../store/index.js';
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

const Tabs = () => {
  const active = useStore(activeTab);

  return (
      <Navigation className="fs-fine">
        {tabs.map(tab => {
          return (
            <NavigationItem
              as="button"
              key={tab.label}
              className={active === tab.label ? 'is-selected' : ''}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </NavigationItem>
          );
        })}
      </Navigation>
  )
}

export default Tabs;
