import React from 'react';
import Header from './components/Header';
import User from './components/User';
import AddUser from './components/AddUser';
import axios from 'axios'

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component{
  constructor(props){
    super(props)

    axios.get(baseUrl).then((res) =>{
      this.setState({users: res.data.data})
    })
    
    this.state = {

        users : []
    }
    this.editUser = this.editUser.bind(this)
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
}

  render(){return (
    <div>
      <Header title= "Список пользователей"/>
      <main>
        <User users= {this.state.users} onEdit = {this.editUser} onDelete = {this.deleteUser}/>
      </main>
      <aside>
        <AddUser onAdd = {this.addUser}/>
      </aside>
    </div>)
}
  deleteUser(id){
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }
  editUser(user){
    var allUsers = this.state.users
    allUsers [user.id - 1] = user

    this.setState({users: []}, () =>{
      this.setState({users: [...allUsers] })
    })
  }
  addUser(user){
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users ,{id, ...user}]})
}
}

export default App