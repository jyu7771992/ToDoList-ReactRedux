import React from 'react';
import './ColorCheckedBox.css';

export default function ColorCheckbox({ name, hex, checked, onChange }) {
  return (
    <label className='checkbox-label'>
      <input type='checkbox' checked={checked} onChange={onChange} />
      <div
        className='checkbox-displaycolor'
        style={{
          backgroundColor: hex,
        }}
      ></div>
      <span>{name}</span>
    </label>
  );
}
