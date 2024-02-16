import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";

function DynamicForm({ fields, onNext, onPrev, formData, handleInputChange }) {
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, [fields]);

  const handleSubmit = (e) => {
    setIsVisible(false);
    e.preventDefault();
    console.log(formData);
    setDirection("right");
    onNext();
  };

  const onPrevious = () => {
    setDirection("left");
    setIsVisible(false);
    onPrev();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div
        className={`form-group ${
          isVisible
            ? "visible"
            : direction === "right"
            ? "fade-in-next"
            : "fade-in-prev"
        }`}
      >
        <FormInput
          fields={fields}
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <div style={{ height: "100px", width: "100%" }}>
          <div className="form-button-next">
            <button className="next-button" type="submit">
              <span>&rarr;</span>
            </button>
          </div>
          <div className="form-button-prev">
            <button className="prev-button" type="button" onClick={onPrevious}>
              <span>&larr;</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default DynamicForm;
