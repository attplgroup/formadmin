import React, { useState } from "react";
import DynamicForm from "../form/DynamicForm";
import personalLoanFormFields from "./PersonalLoanFormFeild";
import axios from "axios";
import { Modal, Button } from "antd";

const PersonalLoanForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = ({ name, value }) => {
    setErrors({ ...errors, [name]: "" });

    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetFormFields = () => {
    setFormData({});
    setStep(1);
  };

  const validateFormData = () => {
    let isValid = true;
    const newErrors = {};

    for (const fieldName in personalLoanFormFields) {
      const field = personalLoanFormFields[fieldName];
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitFormData = async () => {
    try {
      if (!validateFormData()) {
        setShowErrorModal(true); // Show error modal if form data is not valid
        return;
      }

      const response = await axios.post(
        "http://localhost:8081/postFormData",
        {
          formType: "Personal Loan",
          ...formData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Form data submitted successfully");
        setShowSuccessModal(true);
        resetFormFields();
      } else {
        console.error("Failed to submit form data");
        setErrorMessage("Failed to submit form data. Please try again later.");
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
      setShowErrorModal(true);
    }
  };

  const onNext = () => {
    const numSteps = Object.keys(personalLoanFormFields).length - 1;
    console.log(step, numSteps);
    if (step >= numSteps) {
      try {
        submitFormData();
      } catch (error) {}
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const onPrev = () => {
    if (step <= 1) {
      return;
    }
    setStep((prevStep) => prevStep - 1);
  };

  const getFieldsForStep = (currentStep) => {
    const fieldGroupNames = Object.keys(personalLoanFormFields);
    if (currentStep <= 0 || currentStep > fieldGroupNames.length) {
      return [];
    }
    const fieldName = fieldGroupNames[currentStep];
    return personalLoanFormFields[fieldName];
  };

  return (
    <>
      <div className={`form-container-animation}`}>
        <div className="form-container">
          <div className="form-header">
            <div className="form-header-div">
              <h2>{personalLoanFormFields.header}</h2>
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
                errors={errors} // Pass errors to DynamicForm for displaying
              />
            )}
          </div>
        </div>
      </div>

      <Modal
        title="Success!"
        visible={showSuccessModal}
        onCancel={() => setShowSuccessModal(false)}
        footer={[
          <Button key="ok" onClick={() => setShowSuccessModal(false)}>
            OK
          </Button>,
        ]}
      >
        <p>Your form has been successfully submitted.</p>
      </Modal>

      {/* Error Modal */}
      <Modal
        title="Error!"
        open={showErrorModal}
        onCancel={() => setShowErrorModal(false)}
        footer={[
          <Button key="ok" onClick={() => setShowErrorModal(false)}>
            OK
          </Button>,
        ]}
      >
        <p>{errorMessage}</p>
      </Modal>
    </>
  );
};

export default PersonalLoanForm;
