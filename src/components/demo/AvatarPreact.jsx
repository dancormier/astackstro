import { h, Fragment } from 'preact';
import { useStore } from 'nanostores/preact';
import { activeTab } from '../../store/index.js';
import { avatarProps } from '../../store/avatar.js';
import Avatar from '../preact/Avatar.jsx';
import { getDefaultValues } from '../../util.js';

const Avatars = () => {
  const active = useStore(activeTab);
  const props = useStore(avatarProps);
  const propValues = getDefaultValues(props);

  return active === 'Preact' ? (
    <div>
      <h3 className="fs-heading1 mt32">Preact</h3>
      <Avatar {...propValues} />
    </div>
  ) : <span/>;
}

export default Avatars;
