import React, { useState } from "react";
import DynamicForm from "../form/DynamicForm";
import formFields from "../FormFeild";

const PersonalLoanForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [errors, setErrors]=useState({})
 


  const handleInputChange = ({ name, value }) => {
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  
    if (name === "phoneNo" && value.length !== 10) {
      return;
    } else {
      setErrors({ ...errors, phoneNo: "Phone number must be 10 digits long" });
    }
  };
  

  const onNext = () => {
    if (step >= getNumSteps()) {
      return;
    }
    setStep((prevStep) => prevStep + 1);
  };

  const onPrev = () => {
    if (step <= 1) {
      return;
    }
    setStep((prevStep) => prevStep - 1);
  };

  const getNumSteps = () => {
    const numSteps = Object.keys(formFields).length;
    return Math.min(numSteps);
  };

  const getFieldsForStep = (currentStep) => {
    const fieldGroupNames = Object.keys(formFields);
    if (currentStep <= 0 || currentStep > fieldGroupNames.length) {
      return [];
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
            {step > 0 && (
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
