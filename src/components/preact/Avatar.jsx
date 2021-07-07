import { h, Fragment } from 'preact';
import View from './View';

export default function Avatar({
  alt,
  children,
  className = '',
  letter,
  size = 16,
  src,
  ...rest
}) {
  return (
    <View className={`s-avatar s-avatar__${size} ${className}`} {...rest}>
      {letter ? <div className="s-avatar--letter">{letter}</div> : ''}
      {src ? <img className="s-avatar--image" src={src} alt={alt} /> : ''}
      {children}
    </View>
  );
}
