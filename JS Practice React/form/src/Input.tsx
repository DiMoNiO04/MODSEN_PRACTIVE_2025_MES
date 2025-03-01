import { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ value, onChange, ...rest }: IInputProps) => {
  return (
     <input type="text" placeholder='Text' value={value} onChange={onChange} {...rest} />
  )
};
