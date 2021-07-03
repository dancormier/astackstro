import React from 'react';
import Badge from './Badge';

const Badges = ({badges}) => (
  <>
    {badges?.items?.map(item => (
      <Badge key={item.id} className="mr4 mb4">{item.name}</Badge>
    ))}
  </>
)

export default Badges;
