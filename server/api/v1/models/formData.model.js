const { DataTypes, Sequelize } = require("sequelize");
const { pool } = require("../../config/database"); // Use sequelize instead of pool

const FormData = pool.define(
  "FormData",
  {
    formType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employment_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    primary_bank_account: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yearly_income: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "FormData",
  }
);

// You should sync the model, not sequelize
(async () => {
  await FormData.sync({ force: false });
  console.log("Address model synchronized with database!");
})();

module.exports = FormData;
