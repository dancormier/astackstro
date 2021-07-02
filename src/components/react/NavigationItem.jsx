import React from 'react';
import View from './View';

const NavigationItem = ({
  as = 'a',
  children,
  className = '',
  ...rest
}) => (
  <View
    as={as}
    className={`
      s-navigation--item
      ${className}
    `}
    {...rest}
  >
    {children}
  </View>
);

export default NavigationItem;
