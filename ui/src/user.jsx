import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
    margin: 5px 0;

    &:hover {
        text-decoration: line-through;
        color: #f00;
        cursor: pointer;
    }
`;

export const User = ({ id, name, onClick }) =>
    <ListItem onClick={() => onClick(id)}>{name}</ListItem>;
