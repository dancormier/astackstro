import React from 'react';
import View from './View';

const NavigationTitle = ({
  as = 'div',
  children,
  className = '',
  ...rest
}) => (
  <View
    as={as}
    className={`
      s-navigation--title
      ${className}
    `}
    {...rest}
  >
    {children}
  </View>
);

export default NavigationTitle;
