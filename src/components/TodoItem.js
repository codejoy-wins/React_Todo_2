import React, { Component } from 'react'
import PropTypes from 'prop-types';
// 41 minutes in he starts on Events

export class TodoItem extends Component {

    getStyle = () => {
        return {
            // background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: this.props.todo.completed ? 'lightGreen' : 'crimson'
        }
    }

    

  render() {

    const {id, title } = this.props.todo;

    return (
    //   <div style={{backgroundColor:'blue'}}>
    //   <div style={itemStyle}>
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
            {title}
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// const itemStyle = {
//     backgroundColor: 'gray'
// }

export default TodoItem

// rce tab to do this ^^^
