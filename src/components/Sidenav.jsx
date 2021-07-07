
import React from 'react';
import Navigation from '../components/react/Navigation.jsx';
import NavigationItem from '../components/react/NavigationItem.jsx';
import NavigationTitle from '../components/react/NavigationTitle.jsx';

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
  // {
  //   title: 'Resources',
  //   items: [
  //     'Icons',
  //     'Spot illustrations',
  //   ],
  // }, {
  //   title: 'Base',
  //   items: [
  //     'Backgrounds',
  //     'Borders',
  //     'Border radius',
  //     'Box shadow',
  //     'Box sizing',
  //     'Colors',
  //     'Current color',
  //     'Cursors',
  //     'Display',
  //     'Flex',
  //     'Floats',
  //     'Grid',
  //     'Deprecated',
  //     'Interactivity',
  //     'Lists',
  //     'Opacity',
  //     'Outline',
  //     'Overflow',
  //     'Positioning',
  //     'Spacing',
  //     'Transitions',
  //     'Truncation',
  //     'Typography',
  //     'Vertical alignment',
  //     'Visibility',
  //     'Width & height',
  //     'Z-index',
  //   ],
  // },
  {
    title: 'Components',
    items: [
      'Activity indicator',
      'Avatars',
      'Badges',
      'Banners',
      'Breadcrumbs',
      'Buttons',
      'Button groups',
      'Cards',
      'Checkbox',
      'Code blocks',
      'Editor',
      'Empty states',
      'Expandable',
      'Inputs',
      'Labels',
      'Links',
      'Link previews',
      'Menus',
      'Modals',
      'Navigation',
      'Notices',
      'Page titles',
      'Pagination',
      'Popovers',
      'Post summary',
      'Progress bars',
      'Prose',
      'Radio',
      'Select',
      'Sidebar widgets',
      'Spinner',
      'Tables',
      'Tags',
      'Textarea',
      'Toggle switch',
      'User cards ',
    ],
  }
]

export default function SideNav ({ selected }) {
  return (
    <Navigation layout="vertical">
      {navItems.map(group => {
        return (
          <div key={group.title} className="mb16">
            <NavigationTitle>{group.title}</NavigationTitle>
            {group.items.map((item, i) => {
              console.log(i)
              return (
                <NavigationItem
                  key={item}
                  className={item === selected ? 'is-selected' : ''}
                  href={item.toLowerCase().replaceAll(' ', '-')}
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
