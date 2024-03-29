import React from "react";

const Input = ({
  label,
  inputType,
  hasError,
  value,
  onChangeHandler,
  onBlurHandler,
  placeholder,
}) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor=""
        className="text-black pb-1 font-medium"
      >
        {label}
      </label>
      <input
        type={inputType}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        className={`outline-none bg-zinc-200 px-2 py-1 border-2 rounded-lg placeholder:text-zinc-500 placeholder:font-medium transition-all ${
          hasError ? "border-red-500" : "border-zinc-300 focus:border-cyan-400"
        } `}        
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
