import React from 'react';
import { useStore } from 'nanostores/react';
import { avatarProps } from '../../store/avatar.js';
import Avatar from '../react/Avatar.jsx';
import { getDefaultValues } from '../../util.js';

const Avatars = () => {
  const props = useStore(avatarProps);
  const propValues = getDefaultValues(props);
  const staticImage = {
    alt: "demo image",
    size: 64,
    src: "https://picsum.photos/128#react"
  }
  const staticLetter = {
    className: "bg-blue-500",
    letter: "r",
    size: 32,
  }

  return (
    <div className="d-flex jc-space-between">
      <div>
        <h3 className="fs-heading2 mt16">React</h3>
        <Avatar {...propValues} />
      </div>
      <div>
        <h3 className="fs-title mt16">Static (image)</h3>
        <Avatar {...staticImage} />
      </div>
      <div>
        <h3 className="fs-title mt16">Static (letter)</h3>
        <Avatar {...staticLetter} />
      </div>
    </div>
  );
}

export default Avatars;
