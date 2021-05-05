import React, { ChangeEventHandler } from 'react';

export interface Props {
  name: string;
  label?: string;
  hasError?: boolean;
  errorMsg?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const Input = ({ onChange, label, name, hasError, errorMsg, value }: Props) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input type="text" onChange={onChange} id={name} value={value} style={{ color: 'black' }} />
      {hasError && <p>{errorMsg}</p>}
    </div>
  );
};

export default Input;
