import React, { Component } from 'react';

import { api } from './api';
import { UserInput } from './user-input';
import { UserList } from './user-list';

export class Users extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers() {
        return api.get('users')
            .then((users) => this.setState({ users: this.sort(users) }));
    }

    handleUserCreate = (name) => {
        const newUser = { name };
        this.createUser(newUser);
    }

    handleUserRemove = (id) => {
        this.removeUser(id);
    }

    createUser(newUser) {
        return api.create('users', newUser)
            .then((user) => {
                this.addUserToList(user);
            });
    }

    removeUser(userId) {
        return api.remove('users', userId)
            .then((removedUser) => {
                this.removeUserFromList(userId);
            });
    }

    addUserToList(user) {
        this.setState({
            users: [ ...this.state.users, user ]
        });
    }

    removeUserFromList(userId) {
        const { users } = this.state;
        const index = users.findIndex(({ _id }) => _id === userId);
        const usersCopy = [ ...users ];
        usersCopy.splice(index, 1);
        this.setState({ users: usersCopy });
    }

    sort(users) {
        return users.sort((prev, curr) => prev.name < curr.name ? -1 : 1);
    }

    render() {
        return (
            <section>
                <UserInput onSubmit={this.handleUserCreate} />
                <UserList
                    users={this.state.users}
                    onClick={this.handleUserRemove}
                />
            </section>
        );
    }
}
