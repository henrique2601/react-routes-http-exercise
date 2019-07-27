import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class UserList extends Component {

  state = {
    users: [],
    userInfo: {},
    page: 1
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
    const { users, page, userInfo } = this.state;

    return (
      <div className="user-list">
        { users.map(user => this.rowUser(user)) }
        <div className="actions">
          <button 
            disabled={page===1}
            onClick={this.prevpage}>
              Anterior
          </button>
          <button 
            disabled={page===userInfo.total_pages}
            onClick={this.nextPage}>
              Proximo
            </button>
        </div>
      </div>
    );
  }

  loadUsers = async (page = 1) => {
    const res = await api.get(`/users?per_page=3&page=${page}`);
    const { data, ...userInfo } = res.data;
    this.setState({ users: data, userInfo, page });
  }

  prevpage = () => {
    const {page, userInfo} = this.state 
    if (page === 1) return;
    
    const pageNumber = page - 1;
    this.loadUsers(pageNumber);
  }

  nextPage = () => {
    const {page, userInfo} = this.state 
    if (page === userInfo.total_pages) return;
    const pageNumber = page + 1;
    this.loadUsers(pageNumber);
  }
}

