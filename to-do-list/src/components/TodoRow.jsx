import React from 'react';

const TodoRow = ({ todo, onColorChange, onCompletedChange, onDelete }) => {
  const handleCompletedChanged = (e) => {
    onCompletedChange(e.target.checked);
  };

  const handleColorChanged = (e) => {
    onColorChange(e.target.value);
  };

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  return (
    <li>
      <div className='view'>
        <div className='segment label'>
          <input
            className='toggle'
            type='checkbox'
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className='todo-text'>{text}</div>
        </div>
        <div className='segment buttons'>
          <select
            className='colorPicker'
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=''></option>
            {colorOptions}
          </select>
          <button className='destroy' onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  );
};
export default TodoRow;
