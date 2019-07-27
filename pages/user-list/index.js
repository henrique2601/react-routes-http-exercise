import React, { Component } from 'react';
import api from '../../services/api';

export default class UserList extends Component {

  state = {
    users: []
  }

  componentDidMout() {
    this.loadUsers();
  }

  render() {
    return(
      <>
        <h1>User List</h1>
        <p>Teste de conteudo</p>
      </>
    )
  }

  loadUsers = async () => {
    const res = await api.get(`/users?per_page=10?page=1`);
    this.setState({ users: res.data.data });
  }
}