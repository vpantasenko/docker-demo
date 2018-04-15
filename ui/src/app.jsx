import React from 'react';
import styled from 'styled-components';

import { Greeting } from './greeting';
import { Users } from './users';

const Container = styled.div`
    width: 450px;
    margin: 0 auto;
    font-family: Montserrat, Arial;
    font-size: 1.25em;
`;

export const App = () => (
    <Container>
        <Greeting />
        <Users />
    </Container>
);
