import { h, Fragment } from 'preact';
import { useStore } from 'nanostores/preact';
import { avatarProps } from '../../store/avatar.js';
import Avatar from '../preact/Avatar.jsx';
import { getDefaultValues } from '../../util.js';

const Avatars = () => {
  const props = useStore(avatarProps);
  const propValues = getDefaultValues(props);
  const staticImage = {
    alt: "demo image",
    size: 64,
    src: "https://picsum.photos/128#preact"
  }
  const staticLetter = {
    className: "bg-powder-500",
    letter: "p",
    size: 32,
  }

  return (
    <div className="d-flex jc-space-between">
      <div>
        <h3 className="fs-heading2 mt16">Preact</h3>
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
