import React from 'react';
import Button from './button';

export default { component: Button, title: 'Button' };

export const Hello = () => (
  <Button onClick={() => alert('hello!')}>Hello!</Button>
);

export const Disabled = () => (
  <Button onClick={() => alert('hello!')} disabled>Disabled!</Button>
);
