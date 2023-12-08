import React from 'react';

const Input = ({ name, value, onChange, children }) => {
  console.log('Input component')
  return (
    <input
      className="form-control"
      name={name}
      value={value}
      onChange={(e) => onChange(e) }
      type="text"
    />
  )
};

export default Input
