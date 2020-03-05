import React from 'react';

interface Props {
  children: React.ReactNode
  onClick: (params: string | object) => void
}

const Button = (props: Props) => {
  const {
    onClick,
    children
  } = props;

  return (
    <button onClick={onClick}>{ children }</button>
  );
};

export default Button;