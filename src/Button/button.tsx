import React from 'react';

interface Props {
  children: React.ReactNode
  onClick: (params: string | object) => void
}

const Button = (props: Props) => (
  <button onClick={props.onClick}>{ props.children }</button>
);

export default Button;