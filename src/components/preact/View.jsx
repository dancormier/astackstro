import { h, Fragment } from 'preact';

export default function View({
  as: Wrapper = 'div',
  children,
  className = '',
  ...rest
}) {
  return (
    <Wrapper className={className} {...rest}>
      {children}
    </Wrapper>
  );
}
