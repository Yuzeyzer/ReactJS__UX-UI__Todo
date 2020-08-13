import React, { useState } from 'react';

import './create-task.scss';
import Modal from '../modal/modal';

const CreateTask = ({ handleSubmit, handleChange, form, todos, modal, setModal }) => {
  return (
    <Modal modal={modal} setModal={setModal}>
      <form className='create-task-from' onSubmit={handleSubmit}>
        <h3 className='create-task-title'>Родительский элемент</h3>
        <label>
          <svg
            width='19'
            height='11'
            viewBox='0 0 19 11'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M1.16057 1.09787C1.22153 1.03676 1.29395 0.988273 1.37368 0.955189C1.45341 0.922106 1.53888 0.905077 1.6252 0.905077C1.71152 0.905077 1.79699 0.922106 1.87672 0.955189C1.95644 0.988273 2.02886 1.03676 2.08982 1.09787L9.5002 8.50956L16.9106 1.09787C16.9716 1.03686 17.044 0.988459 17.1237 0.955438C17.2035 0.922416 17.2889 0.905421 17.3752 0.905421C17.4615 0.905421 17.5469 0.922416 17.6266 0.955438C17.7064 0.988459 17.7788 1.03686 17.8398 1.09787C17.9008 1.15889 17.9492 1.23133 17.9823 1.31105C18.0153 1.39077 18.0323 1.47621 18.0323 1.5625C18.0323 1.64879 18.0153 1.73423 17.9823 1.81395C17.9492 1.89367 17.9008 1.96611 17.8398 2.02712L9.96482 9.90213C9.90386 9.96324 9.83144 10.0117 9.75171 10.0448C9.67199 10.0779 9.58652 10.0949 9.5002 10.0949C9.41388 10.0949 9.32841 10.0779 9.24868 10.0448C9.16895 10.0117 9.09653 9.96324 9.03557 9.90213L1.16057 2.02712C1.09946 1.96616 1.05097 1.89375 1.01789 1.81402C0.984803 1.73429 0.967773 1.64882 0.967773 1.5625C0.967773 1.47618 0.984803 1.39071 1.01789 1.31098C1.05097 1.23125 1.09946 1.15883 1.16057 1.09787Z'
              fill='#FFF27D'
            />
          </svg>
          <select
            className='create-task-select'
            disabled={todos.length ? false : true}
            name='select'
            value={form.select}
            onChange={handleChange}>
            <option value=''>Вы не выбрали родительский элемент</option>
            {todos.map((todo) => (
              <option value={todo.text} key={todo.id}>
                {todo.text}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          <h3 className='create-task-title'>Заголовок</h3>
          <input
            required={true}
            type='text'
            name='text'
            onChange={handleChange}
            value={form.text}
            placeholder='Вы не выбрали заголовок'
          />
        </label>
        <br />
        <button className='btn-add' type='submit'>
          <i className='fa fa-plus' />
          Добавить задачу
        </button>
      </form>
    </Modal>
  );
};

export default CreateTask;
