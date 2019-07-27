import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class UserList extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    this.loadUsers();
  }

  rowUser = (user) => (
    <article key={user.id}>
      <strong>{user.first_name} {user.last_name}</strong>
      <p>{user.email}</p>
      <Link to={`/users/${user.id}`}>Acessar</Link>
    </article>
  )

  render() {
    const { users } = this.state;

    return (
      <div className="user-list">
        { users.map(user => this.rowUser(user)) }
        <div className="actions">
          <button>Anterior</button>
          <button>Proximo</button>
        </div>
      </div>
    );
  }

  loadUsers = async () => {
    const res = await api.get(`/users?per_page=3?page=1`);
    this.setState({ users: res.data.data });
  }
}

