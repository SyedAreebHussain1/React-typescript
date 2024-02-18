import React from "react";
type InputProps = {
  type: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = ({ type, value, handleChange }: InputProps) => {
  const handleChangeTest = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return <input value={value} type={type} onChange={(e) => handleChange(e)} />;
};
