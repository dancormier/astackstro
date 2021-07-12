import React from 'react';
import View from './View';
import Icons from '@stackoverflow/stacks-icons';

const Icon = ({ name = 'LogoGlyphSm', native }) => {
  const [stacksIcon, setStacksIcon] = React.useState(Icons[name]);

  React.useEffect(() => {
    if (native) {
      setStacksIcon(Icons[name].replace(/svg-icon /g, 'svg-icon native '));
    }
  }, [name, native]);

  return (
    <View as='span' dangerouslySetInnerHTML={{ __html: stacksIcon }} />
  );
};

export default Icon;
