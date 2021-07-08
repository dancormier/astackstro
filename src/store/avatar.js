import { createStore, getValue } from 'nanostores';

const avatarProps = createStore(() => {
  avatarProps.set({
    alt: {
      'data-description': 'Passed through to alt on img tag',
      defaultValue: 'Some beautiful person(s) or object',
    },
    as: {
      'data-description': 'HTML tag',
      defaultValue: 'a',
      disabled: true,
    },
    children: {
      'data-description': 'Child elements',
      disabled: true,
    },
    className: {
      'data-description': 'Add classes to the component',
      defaultValue: '',
    },
    href: {
      'data-description': 'Link to user/team profile',
      defaultValue: 'https://stackoverflow.com/users/3',
    },
    letter: {
      'data-description': 'A single character for displaying an abbreviated Team name',
      defaultValue: '',
    },
    size: {
      'data-description': 'Width/height in pixels (16 | 24 | 32 | 48 | 64 | 96 | 128).',
      defaultValue: 128,
      min: 16,
      max: 128,
      step: 16,
      type: 'number',
    },
    src: {
      'data-description': 'Image url',
      defaultValue: 'https://picsum.photos/256',
    },
  });
});

function setAvatarProps(name, type, value) {
  avatarProps.set({
    ...getValue(avatarProps),
    [name]: {
      ...getValue(avatarProps)[name],
      [type]: value,
    }
  });
}

export { avatarProps, setAvatarProps };
