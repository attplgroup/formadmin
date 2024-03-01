const formDataService = require("../service/postFormData.service");

const getFormData = async (req, res) => {
  const { formType } = req.params;

  try {
    const response = await formDataService.getFormData(formType);

    return res
      .status(200)
      .json({ message: "Form data fetched successfully.", data: response });
  } catch (error) {
    console.error("Error fetching form data:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

const postFormData = async (req, res) => {
  const {
    formType,
    address,
    email,
    employment_type,
    name,
    phoneNo,
    primary_bank_account,
    yearly_income,
  } = req.body;

  // Check if any required field is missing
  if (
    !formType ||
    !address ||
    !email ||
    !employment_type ||
    !name ||
    !phoneNo ||
    !primary_bank_account ||
    !yearly_income
  ) {
    return res.status(400).json({ message: "All form fields are required." });
  }

  try {
    const response = await formDataService.postFormData(
      formType,
      address,
      email,
      employment_type,
      name,
      phoneNo,
      primary_bank_account,
      yearly_income
    );

    return res
      .status(200)
      .json({ message: "Form data posted successfully.", data: response });
  } catch (error) {
    // Return error response
    return res.status(500).json({ message: "Internal server error." });
  }
};
const updateFormData = async (req, res) => {
  const {
    address,
    email,
    employment_type,
    name,
    phoneNo,
    primary_bank_account,
    yearly_income,
  } = req.body;

  const { formId } = req.params;

  // Check if any required field is missing
  if (
    !address ||
    !email ||
    !employment_type ||
    !name ||
    !phoneNo ||
    !primary_bank_account ||
    !yearly_income
  ) {
    return res.status(400).json({ message: "All form fields are required." });
  }

  try {
    const response = await formDataService.updateFormData(
      formId,
      address,
      email,
      employment_type,
      name,
      phoneNo,
      primary_bank_account,
      yearly_income
    );

    return res
      .status(200)
      .json({ message: "Form data posted successfully.", data: response });
  } catch (error) {
    // Return error response
    return res.status(500).json({ message: "Internal server error." });
  }
};
const deleteFormData = async (req, res) => {
  const { formId } = req.params;

  try {
    const response = await formDataService.deleteFormData(formId);

    return res
      .status(200)
      .json({ message: "Form data posted successfully.", data: response });
  } catch (error) {
    // Return error response
    return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { postFormData, getFormData, updateFormData, deleteFormData };
