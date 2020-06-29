import React from 'react';

import { Container } from './styles';

function Tooltip({ title, children }) {
  return (
    <Container>
      {children}
      <span>{title}</span>
    </Container>
  );
}

export default Tooltip;
