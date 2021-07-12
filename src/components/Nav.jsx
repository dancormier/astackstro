import React from 'react';
import View from './react/View';
import Navigation from './react/Navigation';
import NavigationItem from './react/NavigationItem';
import Button from './react/Button';
import Icon from './react/Icon';

const navItems = [
  {
    label: 'React',
    href: '/'
  }, {
    label: 'Svelte',
    href: '/svelte'
  }, {
    label: 'Preact',
    href: '/preact'
  }, {
    label: 'Vue',
    href: '/vue'
  }
]

export default function Nav ({ handleDarkMode, selectedIndex }) {
  return (
    <View as="nav" className="bg-black-050 bb bc-black-100 p16">
      <View className="d-flex jc-space-between mx-auto wmx12 w100">
        <Navigation>
          <View as="li" className="as-center mx16">
            <Icon name="LogoGlyph" native />
          </View>
          <View className="fs-headline2">🧰</View>
          {/* {navItems.map((item, i) => {
            return (
              <li key={item.href}>
                  <NavigationItem
                    href={item.href}
                    className={i === selectedIndex && "is-selected"}
                  >
                    {item.label}
                  </NavigationItem>
              </li>
            )
          })} */}
        </Navigation>
        <Button
          variant="unset"
          className="c-pointer fc-black-300"
          title="Toggle dark mode"
          onClick={handleDarkMode}
        >
          <Icon name="Theme" />
        </Button>
      </View>
    </View>
  );
};
