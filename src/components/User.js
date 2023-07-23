import React from 'react';
import Users from './Users'

class User extends React.Component{
    
  render (){
    if (this.props.users.length > 0)
        
    return(<div>
        {this.props.users.map((el) => (
             <Users onEdit={this.props.onEdit}  onDelete = {this.props.onDelete} key={el.id} user = {el}/>))}
    </div>) 
    else{
        return(<div className='user'>
            <h3>Пользователи не найдены!</h3>
        </div>)
    }
  }
}

export default User