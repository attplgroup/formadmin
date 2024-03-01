import React from "react";
import GetInputElement from "./GetInputElement";

const FormInput = ({ fields, formData, handleInputChange }) => {
  return (
    <div className={fields[0].FeildClassName}>
      {fields.map((field) => (
        <div key={field.title} className="input-row-div">
          <label htmlFor={field.label}>{field.label}</label>
          <div>
            <GetInputElement
              field={field}
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormInput;
