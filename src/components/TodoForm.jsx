import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

function TodoForm(props) {
  const { t } = useTranslation();
  const [todoInput, setTodoInput] = useState('');

  function handleInput(event) {
    setTodoInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }

    props.addTodo(todoInput);

    setTodoInput('');
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoInput}
        onChange={handleInput}
        className="todo-input"
        placeholder={ t("What do you need to do?") }
      />
    </form>
  );
}

export default TodoForm;
