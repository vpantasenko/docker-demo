import React from 'react';
import styled from 'styled-components';

import { User } from './user';

const List = styled.ul`
    font-size: 1.25em;
`;

export const UserList = ({ users, onClick }) => {
    return (
        <List>
            {users.map(user => (
                <User
                    key={user._id}
                    id={user._id}
                    name={user.name}
                    onClick={onClick}
                />
            ))}
        </List>
    );
};
