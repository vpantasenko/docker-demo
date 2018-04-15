import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
    width: 345px;
    border: none;
    border-bottom: 3px solid #000;
    padding: 6px 15px;
    font-size: 1.25em;

    &::-webkit-input-placeholder {
        color: #9a9a9a;
    }
`;

const ButtonInput = styled.input`
    border: none;
    color: #fff;
    background: #000;
    padding: 10px;
    font-size: 1em;
    text-transform: uppercase;
    margin-left: 10px;

    &:hover {
        cursor: pointer;
    }
`;

export const UserInput = (props) => {
    let usernameInput = null;
    const handleKeyUp = event => {
        if (event.keyCode === 13) {
            event.preventDefault();
            addUser();
        }
    };
    const handleSubmit = event => event.preventDefault();
    const addUser = () => {
        const userName = usernameInput.value;
        if (userName) {
            props.onSubmit(userName);
            usernameInput.value = '';
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                type="text"
                innerRef={input => (usernameInput = input)}
                onKeyUp={handleKeyUp}
            />
            <ButtonInput
                type="button"
                value="Add"
                onClick={addUser}
            />
        </form>
    );
};
