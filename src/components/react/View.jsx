import React from 'react';

const View = ({
  as: Wrapper = 'div',
  children,
  className = '',
  ...rest
}) => (
  <Wrapper className={className} {...rest}>
    {children}
  </Wrapper>
);

export default View;
