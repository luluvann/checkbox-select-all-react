import React from "react";

const Task = ({ id, type, name, onChange, isChecked }) => {
    return (
      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        checked={isChecked}
      />
    ); 
  };

export default Task;