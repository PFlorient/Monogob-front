import React from 'react';
import './InputTextPassword.css';
interface InputTextPasswordProps {
  type: 'text' | 'email' | 'password';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  children: React.ReactNode;
}

const InputTextPassword = (props: InputTextPasswordProps) => {
  return (
    <div className="test">
      <label htmlFor={props.name}>{props.children}</label>
      <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
      {props.error && <span>{props.error}</span>}
    </div>
  );
};

export default InputTextPassword;
