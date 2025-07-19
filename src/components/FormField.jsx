import React from "react";

const FormField = (props) => {
  return (
    <div>
      <div className="flex items-center gab-2 mb-2">
        <label
          htmlFor={props.name}
          className="block text-sm font-medium text-gray-900"
        >
          {props.LabelName}
        </label>

        {props.isSurpriseMe && (
          <button
            className="font-semibold text-xs bg-gray-100 rounded-md px-3 py-2 ml-2"
            type="button"
            onClick={props.handleSurpriseMe}
          >
            Surprise Me
          </button>
        )}
      </div>

      <input 
      className="border-2 mb-3 bg-gray-50 border-gray-100  text-gray-900 text-sm outline-none w-full rounded-lg focus:ring-[#4649ff] focus-border-[#4649ff] block p-3"
      type={props.input}
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
      required
      />
    </div>
  );
};

export default FormField;
