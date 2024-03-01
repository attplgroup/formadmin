const FormData = require("../models/formData.model");

const getFormData = async (formType) => {
  try {
    const formData = await FormData.findAll({
      where: {
        formType: formType, // Assuming formType is the attribute you want to filter by
      },
    });

    if (!formData || formData.length === 0) {
      throw new Error(`No FormData found with formType ${formType}`);
    }

    return formData;
  } catch (error) {
    console.error("Error fetching FormData:", error);
    throw new Error("Failed to fetch FormData");
  }
};

const postFormData = async (
  formType,
  address,
  email,
  employment_type,
  name,
  phoneNo,
  primary_bank_account,
  yearly_income
) => {
  try {
    const newFormData = await FormData.create({
      formType,
      address,
      email,
      employment_type,
      name,
      phoneNo,
      primary_bank_account,
      yearly_income,
    });

    return newFormData;
  } catch (error) {
    console.error("Error adding FormData:", error);
    throw new Error("Failed to add FormData");
  }
};
const updateFormData = async (
  formDataId,
  address,
  email,
  employment_type,
  name,
  phoneNo,
  primary_bank_account,
  yearly_income
) => {
  try {
    console.log(
      formDataId,
      address,
      email,
      employment_type,
      name,
      phoneNo,
      primary_bank_account,
      yearly_income
    );
    let formData = await FormData.findByPk(formDataId);

    if (!formData) {
      throw new Error(`FormData with ID ${formDataId} not found`);
    }

    formData.address = address;
    formData.email = email;
    formData.employment_type = employment_type;
    formData.name = name;
    formData.phoneNo = phoneNo;
    formData.primary_bank_account = primary_bank_account;
    formData.yearly_income = yearly_income;

    formData = await formData.save();

    return formData;
  } catch (error) {
    console.error("Error updating FormData:", error);
    throw new Error("Failed to update FormData");
  }
};

const deleteFormData = async (formDataId) => {
  try {
    const formData = await FormData.findByPk(formDataId);

    if (!formData) {
      throw new Error(`FormData with ID ${formDataId} not found`);
    }

    await formData.destroy();

    return { message: `FormData with ID ${formDataId} deleted successfully` };
  } catch (error) {
    console.error("Error deleting FormData:", error);
    throw new Error("Failed to delete FormData");
  }
};

module.exports = {
  postFormData,
  getFormData,
  deleteFormData,
  updateFormData,
};
