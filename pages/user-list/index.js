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
    const { users } = this.state;
    return(
      <div className="user-list">
        {
          users
        }
      </div>
    )
  }

  loadUsers = async () => {
    console.log("test");
    const res = await api.get(`/users?per_page=10?page=1`);
    console.log(res.data.data);
    console.log("test1");
    this.setState({ users: res.data.data });
  }
}