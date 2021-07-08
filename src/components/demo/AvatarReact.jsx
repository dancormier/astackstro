import React from 'react';
import { useStore } from 'nanostores/react';
import { activeTab } from '../../store/index.js';
import { avatarProps } from '../../store/avatar.js';
import Avatar from '../react/Avatar.jsx';
import { getDefaultValues } from '../../util.js';

const Avatars = () => {
  const active = useStore(activeTab);
  const props = useStore(avatarProps);
  const propValues = getDefaultValues(props);
  const staticImage = {
    alt: "demo image",
    size: 64,
    src: "https://picsum.photos/128"
  }
  const staticLetter = {
    className: "bg-blue-500",
    letter: "r",
    size: 32,
  }

  return active === 'React' ? (
    <div>
      <h3 className="fs-heading1 mt32">React</h3>
      <Avatar {...propValues} />
      <h3 className="fs-title mt16">Static (image)</h3>
      <Avatar {...staticImage} />
      <h3 className="fs-title mt16">Static (letter)</h3>
      <Avatar {...staticLetter} />
    </div>
  ) : '';
}

export default Avatars;
