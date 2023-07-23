import React from 'react';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from './AddUser';

class Users extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editForm: false,
        }}
    user = this.props.user
  render (){
    return(
        <div className='user'> 
        <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className='iconDelite'/>
        <IoHammerSharp onClick={() => {
            this.setState({
                editForm : !this.state.editForm
            })
        }} className='icon-edit'/>
            <h3>{this.user.first_name} {this.user.last_name}</h3>
            <img src={this.user.avatar}></img>
            <p>{this.user.email}</p>
            <b>{this.user.isHappy ? "Счастлив" : "Плохо"}</b>
            {this.state.editForm && <AddUser user={this.user} onAdd = {this.props.onEdit}/>}
        </div> 
    ) 
  };
}

export default Users