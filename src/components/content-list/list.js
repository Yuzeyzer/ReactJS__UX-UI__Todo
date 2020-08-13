import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './list.scss';

const List = ({ setModal, todos, toggleChecked, toggleChildChecked, removeTodo, removeChild }) => {
  const childItems = (child, isCheck) => {
    return (
      <div className='list-child'>
        {child
          .filter((task) => (isCheck ? task.checked : !task.checked))
          .map((element, index) => {
            return (
              <div className='list-child__wrap'>
                <label key={element.id}>
                  <input
                    id={`checkbox${index}-child`}
                    type='checkbox'
                    checked={element.checked}
                    onChange={() => toggleChildChecked(element, index)}
                  />
                  <label for={`checkbox${index}-child`}></label>
                  <h4>{element.text}</h4>
                </label>
                <div className='list-child__title'>
                  {element.checked && (
                    <div className='delete-item'>
                      <svg
                        onClick={() => removeTodo(todo.id)}
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z'
                          fill='#FF6D00'
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    );
  };
  const todoItems = (isCheck) => {
    return (
      <div className='list'>
        {todos
          .filter((todo) => (isCheck ? todo.checked : !todo.checked))
          .map((todo, index) => {
            return (
              <div key={todo.id} className='list-item'>
                <div className='list-item__wrap'>
                  <label>
                    <input
                      id={`checkbox${index}`}
                      type='checkbox'
                      checked={todo.checked}
                      onChange={() => toggleChecked(todo.id)}
                    />
                    <label for={`checkbox${index}`}></label>
                    <h3 className={todo.checked && 'checked'}>{todo.text}</h3>
                  </label>
                  {todo.checked && (
                    <div className='delete-item'>
                      <svg
                        onClick={() => removeTodo(todo.id)}
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z'
                          fill='#FF6D00'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {childItems(todo.child, false)}
                {childItems(todo.child, true)}
              </div>
            );
          })}
      </div>
    );
  };
  return (
    <React.Fragment>
      {todoItems(false)}
      {todoItems(true)}
      <button className='btn-add' onClick={() => setModal(true)}>
        <i className='fa fa-plus' />
        <span>Добавить элемент</span>
      </button>
    </React.Fragment>
  );
};

List.propTypes = {
  name: PropTypes.string,
};

export default List;
