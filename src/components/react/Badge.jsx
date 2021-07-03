import React from 'react';
import View from './View';

const Badge = ({
  as = 'span',
  children,
  className = '',
  bling,
  size,
  variant,
  ...rest
}) => (
  <View
    as={as}
    className={`
      s-badge
      ${variant ? `s-badge__${variant}` : ''}
      ${size ? `s-badge__${size}` : ''}
      ${className}
    `}
    {...rest}
  >
    <span className={bling ? `s-award-bling s-award-bling__${bling}` : ''}>
      {children}
    </span>
  </View>
);

export default Badge;
