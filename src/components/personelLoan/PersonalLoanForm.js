import React, { useState } from "react";
import DynamicForm from "../form/DynamicForm";
import formFields from "../FormFeild"; // assuming all fields are imported directly

const PersonalLoanForm = () => {
  const [step, setStep] = useState(1); // Start on step 1
  const [formData, setFormData] = useState({});

  const handleInputChange = ({ name, value }) => {
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onNext = () => {
    if (step >= getNumSteps()) {
      // Handle reaching the last step (e.g., submit the form)
      return;
    }
    setStep((prevStep) => prevStep + 1);
  };

  const onPrev = () => {
    if (step <= 1) {
      // Handle being on the first step (e.g., disable the "Prev" button)
      return;
    }
    setStep((prevStep) => prevStep - 1);
  };

  // Calculate the number of steps based on field groups
  const getNumSteps = () => {
    const numSteps = Object.keys(formFields).length; // count field groups
    return Math.min(numSteps); // ensure step limit (optional)
  };

  const getFieldsForStep = (currentStep) => {
    // Get the correct field group based on the current step
    const fieldGroupNames = Object.keys(formFields);
    if (currentStep <= 0 || currentStep > fieldGroupNames.length) {
      return []; // handle invalid step numbers
    }
    const fieldName = fieldGroupNames[currentStep];
    return formFields[fieldName];
  };

  return (
    <>
      <div className={`form-container-animation}`}>
        <div className="form-container">
          <div className="form-header">
            <div className="form-header-div">
              <h2>{formFields.header}</h2>
            </div>
          </div>
          <div className="form-content">
            {step > 0 && ( // render form from step 2 onwards
              <DynamicForm
                fields={getFieldsForStep(step)}
                onNext={onNext}
                onPrev={onPrev}
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalLoanForm;
