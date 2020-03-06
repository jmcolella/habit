import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode
  onClick: (params: string | object) => void
  className?: string,
  disabled?: boolean
}

const ButtonComponent = (props: Props) => {
  const {
    onClick,
    children,
    className,
    disabled
  } = props;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>{ children }</button>
  );
};

const Button = styled(ButtonComponent)`
  background-color: #69779b;
  border: none;
  border-radius: 2px;
  color: white;
  padding: 6px 24px;
  transition: background-color .5s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => (props.disabled ? '#69779b' : '#9692af')};
    cursor: pointer;
    transition: background-color .5s ease;
  }

  &:active {
    background-color: #9692af;
    cursor: 
  }

  &:disabled,
  &[disabled] {
    cursor: no-drop;
    opacity: .5;
  }
`;

export default Button;
