import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
`;

const Wrapper = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <GlobalStyles />

      { children }
    </React.Fragment>
  );
};

export default Wrapper;