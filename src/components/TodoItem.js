import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="todo-item" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)}}>
                    &times;
                </div>

                <div className={`todo-texrt ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>

                <div>
                    {
                        checked && (<div className="check-mark">✓</div>)
                    }
                </div>
            </div>
        );
    }
}

export default TodoItem;