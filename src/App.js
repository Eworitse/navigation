import React from 'react';
import styled from 'styled-components';
import Navbar from './comps/navigation';

const BodyWrap = styled.div`
position: relative;
background-color: #227799;
`;

function App() {
  return (
    <>
      <BodyWrap>
        <Navbar />
      </BodyWrap>
    </>
  );
}

export default App;
