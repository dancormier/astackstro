import React from 'react';
import Playground from './Playground.jsx';
import { avatarProps, setAvatarProps } from '../../store/avatar.js';
import Avatar from '../react/Avatar.jsx';

const AvatarPlayground = () => (
  <Playground
    Component={Avatar}
    componentName="Avatar"
    store={avatarProps}
    setProps={setAvatarProps}
  />
)

export default AvatarPlayground;
