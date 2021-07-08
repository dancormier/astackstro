const getDefaultValues = (props) => {
  const propNames = Object.keys(props);
  return propNames.reduce((acc, cur) => (
    { ...acc, [cur]: props[cur].defaultValue }),
  {})
};

export { getDefaultValues };
