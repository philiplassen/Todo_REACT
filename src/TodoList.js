import React, { Component } from 'react'
class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input
              placeholder="Task"
              ref = {this.props.inputElement}
              onChange = {this.props.handleInput}
            />
            <button type="submit"> Add Task</button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList
