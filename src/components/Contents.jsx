
import React from 'react';
import Navigation from '../components/react/Navigation.jsx';
import NavigationItem from '../components/react/NavigationItem.jsx';
// import NavigationTitle from '../components/react/NavigationTitle.jsx';

const selected = "Using Stacks";
const navItems = [
  {
    title: 'Guidelines',
    items: [
      'Using Stacks',
      'Building Stacks',
      'Conditional classes',
      'Releasing Stacks',
      'JavaScript',
    ]
  },
]

export default function ContentsNav () {
  return (
    <Navigation layout="vertical" className="fs-fine">
      {navItems.map(group => {
        return (
          <div key={group.title} className="mb16">
            <NavigationItem href={`#${group.title}`}>{group.title}</NavigationItem>
            {group.items.map((item, i) => {
              console.log(i)
              return (
                <NavigationItem
                  key={item}
                  href={`#${item}`}
                  className={item === selected ? 'fc-theme-primary' : ''}
                >
                  {item}
                </NavigationItem>
              );
            })}
          </div>
        );
      })}
    </Navigation>
  )
}
