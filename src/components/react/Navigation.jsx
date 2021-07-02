import React from 'react';
import View from './View';

const Navigation = ({
  as = 'ul',
  children,
  className = '',
  layout = 'horizontal',
  scrollable = false,
  size = 'default',
  variant,
  ...rest
}) => (
  <View
    as={as}
    className={`
      s-navigation
      ${variant ? `s-navigation__${variant}` : ''}
      ${layout !== 'horizontal' ? `s-navigation__${layout}` : ''}
      ${scrollable ? `s-navigation__${scrollable}` : ''}
      ${size !== 'default' ? `s-size__${size}` : ''}
      ${className}
    `}
    {...rest}
  >
    {children}
  </View>
);

export default Navigation;
