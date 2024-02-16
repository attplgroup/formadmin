const formFields = {
  header: "Personel Loan",
  loginFields: [
    {
      title: "Apply For LOan",
      name: "country",
      label: "country",
      type: "select",
      defaultValue: "+91",
      options: [
        { label: "United States (+1)", value: "+1" },
        { label: "United Kingdom (+44)", value: "+44" },
        { label: "Canada (+1)", value: "+1" },
        { label: "Australia (+61)", value: "+61" },
        { label: "Germany (+49)", value: "+49" },
        { label: "France (+33)", value: "+33" },
        { label: "Japan (+81)", value: "+81" },
        { label: "India (+91)", value: "+91" },
      ],
      style: {
        borderRadius: "10px",
        padding: "12px",
      },
      inputOptionClassName: "",
      FeildClassName: "phone-number-input",
      required: true,
    },
    {
      title: "Phone Number",
      name: "phoneNo",
      label: "Phone Number",
      type: "text",
      style: {
        width: "100%",
        border: "none",
        borderBottom: "1px solid black",
        outline: "none",
        padding: "8px",
        boxSizing: "border-box",

        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 8px top 50%",
        backgroundSize: "24px 24px",
      },
      FeildClassName: "phone-number-input",
      inputOptionClassName: "",
      required: true,
    },
  ],

  employmentFields: [
    {
      name: "employment_type",
      title: "Employment Type",
      label: "Employment Type",
      type: "radio",
      options: [
        { label: "Salaried", value: "salaried" },
        { label: "Self Employed Business", value: "self_employed_business" },
        {
          label: "Self Employed Professional",
          value: "self_employed_professional",
        },
      ],
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],
  yearlyIncomeField: [
    {
      name: "yearly_income",
      title: "Yearly Income",
      label: "Yearly Income",
      type: "radio",
      options: [
        { label: "Up to ₹ 3 Lacs", value: "up_to_3_lacs" },
        { label: "₹ 3 Lacs - ₹ 4 Lacs", value: "3_4_lacs" },
        { label: "₹ 4 Lacs - ₹ 5 Lacs", value: "4_5_lacs" },
        { label: "₹ 5 Lacs - ₹ 10 Lacs", value: "5_10_lacs" },
        { label: "Above ₹ 10 Lacs", value: "above_10_lacs" },
      ],
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],
  primaryBankAccountFields: [
    {
      name: "primary_bank_account",
      title: "Primary Bank Account",
      label: "Primary Bank Account",
      type: "radio",
      options: [
        { label: "State Bank of India", value: "state_bank_of_india" },
        { label: "ICICI Bank", value: "icici_bank" },
        { label: "HDFC Bank", value: "hdfc_bank" },
        { label: "Kotak Mahindra", value: "kotak_mahindra" },
        { label: "Axis Bank", value: "axis_bank" },
        { label: "Citibank", value: "citibank" },
        { label: "Bank of Baroda", value: "bank_of_baroda" },
        { label: "Standard Chartered", value: "standard_chartered" },
        { label: "Central Bank of India", value: "central_bank_of_india" },
        { label: "Federal Bank Limited", value: "federal_bank_limited" },
        { label: "IDFC FIRST Bank Limited", value: "idfc_first_bank_limited" },
        { label: "IDBI Bank Limited", value: "idbi_bank_limited" },
        { label: "YES Bank", value: "yes_bank" },
        { label: "IndusInd Bank Limited", value: "indusind_bank_limited" },
      ],
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  identityProofFields: [
    {
      name: "proof_of_identity",
      title: "Proof of Identity",
      label: "Proof of Identity",
      type: "file",
      description:
        "Government-issued photo ID such as Passport, Driver's License, Aadhar card, or any other valid ID.",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  addressProofFields: [
    {
      name: "proof_of_address",
      title: "Proof of Address",
      label: "Proof of Address",
      type: "file",
      description:
        "Utility bills, rent agreement, or any other document that verifies your current residential address.",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  incomeProofFields: [
    {
      name: "proof_of_income",
      title: "Proof of Income",
      label: "Proof of Income",
      type: "file",
      description:
        "Salary slips for the last few months, Bank statements, Income Tax Returns (ITR) for the previous financial year.",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  employmentVerificationFields: [
    {
      name: "employment_verification",
      title: "Employment Verification",
      label: "Employment Verification",
      type: "file",
      description:
        "Employment certificate or letter from the employer stating your position, salary, and duration of employment.",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  annualIncomeFields: [
    {
      name: "annual_income",
      title: "Annual Income",
      label: "Annual Income",
      type: "text",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  emailFields: [
    {
      name: "email",
      title: "Email",
      label: "Email",
      type: "text",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  desiredLoanAmountFields: [
    {
      name: "desired_loan_amount",
      title: "Desired Loan Amount",
      label: "Desired Loan Amount",
      type: "radio",
      options: [
        { label: "Below ₹2 Lacs", value: "below_2_lacs" },
        { label: "₹2 - ₹5 Lacs", value: "2_5_lacs" },
        { label: "₹5 - ₹10 Lacs", value: "5_10_lacs" },
        { label: "₹10 - ₹20 Lacs", value: "10_20_lacs" },
        { label: "Above ₹20 Lacs", value: "above_20_lacs" },
      ],
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  ////////////////////////

  employmentDetailField: [
    {
      name: "employment_detail",
      title: "Employment Detail",
      label: "Employment Detail",
      type: "text",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  cityField: [
    {
      name: "city",
      title: "Enter your City",
      label: "Enter your City",
      type: "text",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  residenceTypeField: [
    {
      name: "residence_type",
      title: "Select your Residence Type",
      label: "Select your Residence Type",
      type: "radio",
      options: [
        { label: "Owned by Self / Spouse", value: "owned_self_spouse" },
        {
          label: "Owned by Parents / Siblings",
          value: "owned_parents_siblings",
        },
        {
          label: "Rented with Family / Stay alone",
          value: "rented_with_family_alone",
        },
        { label: "Paying Guest / Hostel", value: "paying_guest_hostel" },
        { label: "Company provided", value: "company_provided" },
      ],
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  nameField: [
    {
      name: "name",
      title: "Name",
      label: "Name",
      type: "text",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  proofOfIdentityField: [
    {
      name: "proof_of_identity",
      title: "Proof of Identity",
      label: "Proof of Identity",
      type: "file",
      description:
        "Government-issued photo ID such as Passport, Driver's License, Aadhar card, or any other valid ID.",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  proofOfAddressField: [
    {
      name: "proof_of_address",
      title: "Proof of Address",
      label: "Proof of Address",
      type: "file",
      description:
        "Utility bills, rent agreement, or any other document that verifies your current residential address.",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  proofOfIncomeField: [
    {
      name: "proof_of_income",
      title: "Proof of Income",
      label: "Proof of Income",
      type: "file",
      description:
        "Salary slips for the last few months, Bank statements, Income Tax Returns (ITR) for the previous financial year.",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  employmentVerificationField: [
    {
      name: "employment_verification",
      title: "Employment Verification",
      label: "Employment Verification",
      type: "file",
      description:
        "Employment certificate or letter from the employer stating your position, salary, and duration of employment.",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],
  annualIncomeField: [
    {
      name: "annual_income",
      title: "Annual Income",
      label: "Annual Income",
      type: "text",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  emailField: [
    {
      name: "email",
      title: "Email",
      label: "Email",
      type: "text",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  desiredLoanAmountField: [
    {
      name: "desired_loan_amount",
      title: "Desired Loan Amount",
      label: "Desired Loan Amount",
      type: "radio",
      options: [
        { label: "Below ₹2 Lacs", value: "below_2_lacs" },
        { label: "₹2 - ₹5 Lacs", value: "2_5_lacs" },
        { label: "₹5 - ₹10 Lacs", value: "5_10_lacs" },
        { label: "₹10 - ₹20 Lacs", value: "10_20_lacs" },
        { label: "Above ₹20 Lacs", value: "above_20_lacs" },
      ],
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],
  currentBusinessCityField: [
    {
      name: "current_business_city",
      title: "Current Business City",
      label: "Current Business City",
      type: "text",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  yearsInCurrentBusinessField: [
    {
      name: "years_in_current_business",
      title: "Years in Current Business",
      label: "Years in Current Business",
      type: "radio",
      options: [
        { label: "Under 1 years", value: "under_1_year" },
        { label: "1 - 2 years", value: "1_2_years" },
        { label: "2 - 3 years", value: "2_3_years" },
        { label: "3 - 5 years", value: "3_5_years" },
        { label: "Over 5 years", value: "over_5_years" },
      ],
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  companyTypeField: [
    {
      name: "company_type",
      title: "Company Type",
      label: "Company Type",
      type: "text",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  natureOfBusinessField: [
    {
      name: "nature_of_business",
      title: "Nature Of Business",
      label: "Nature Of Business",
      type: "text",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  industryTypeField: [
    {
      name: "industry_type",
      title: "Industry Type",
      label: "Industry Type",
      type: "text",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  ownershipOfBusinessPlaceField: [
    {
      name: "ownership_of_business_place",
      title: "Ownership of Business Place",
      label: "Ownership of Business Place",
      type: "radio",
      options: [
        { label: "Owned by Self / Spouse", value: "owned_self_spouse" },
        {
          label: "Owned by Parents / Siblings",
          value: "owned_parents_siblings",
        },
        {
          label: "Rented with Family / Stay alone",
          value: "rented_with_family_alone",
        },
      ],
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  wishToTakeLoanAgainstCollateralField: [
    {
      name: "wish_to_take_loan_against_collateral",
      title: "Wish to take loan against collateral?",
      label: "Wish to take loan against collateral?",
      type: "radio",
      options: [
        { label: "Property", value: "property" },
        { label: "Gold", value: "gold" },
        { label: "Car", value: "car" },
        { label: "Bill", value: "bill" },
        { label: "Discounting", value: "discounting" },
        { label: "No", value: "no" },
      ],
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  typeOfConsultationField: [
    {
      name: "type_of_consultation",
      title: "Type of Consultation",
      label: "Type of Consultation",
      type: "radio",
      options: [
        { label: "Corporate Consultancy", value: "corporate_consultancy" },
        { label: "Legal Consultancy", value: "legal_consultancy" },
        { label: "Bureaucrat Consultancy", value: "bureaucrat_consultancy" },
        { label: "Political Consultancy", value: "political_consultancy" },
        { label: "Business Consultancy", value: "business_consultancy" },
        { label: "PR Partner Consultancy", value: "pr_partner_consultancy" },
        { label: "Debt Payment Recovery", value: "debt_payment_recovery" },
      ],
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  serviceTypeField: [
    {
      name: "service_type",
      title: "Service type",
      label: "Service type",
      type: "radio",
      options: [
        { label: "Legal Notices", value: "legal_notices" },
        { label: "Employment Issues", value: "employment_issues" },
        { label: "Property Succession", value: "property_succession" },
        { label: "Property Registration", value: "property_registration" },
        { label: "Cheque Bounce Cases", value: "cheque_bounce_cases" },
        { label: "Money Recovery Issues", value: "money_recovery_issues" },
        { label: "Mutual Divorce", value: "mutual_divorce" },
        {
          label: "Divorce & Matrimonial Consultation",
          value: "divorce_matrimonial_consultation",
        },
        { label: "Maintenance and Alimony", value: "maintenance_and_alimony" },
        {
          label: "Child Custody and Guardianship",
          value: "child_custody_guardianship",
        },
        { label: "File a Consumer Case", value: "file_consumer_case" },
        {
          label: "Will Drafting and Registration",
          value: "will_drafting_registration",
        },
        { label: "MSME Samadhan", value: "msme_samadhan" },
        {
          label: "Insolvency and Bankruptcy Code",
          value: "insolvency_bankruptcy_code",
        },
        {
          label: "File a Criminal Complaint",
          value: "file_criminal_complaint",
        },
        { label: "Company Law Matters", value: "company_law_matters" },
        { label: "File a RTI", value: "file_rti" },
        { label: "Arbitration Matters", value: "arbitration_matters" },
        { label: "Debt Recovery Tribunal", value: "debt_recovery_tribunal" },
        {
          label: "National Green Tribunal Cases",
          value: "national_green_tribunal_cases",
        },
        { label: "Motor Accident Claims", value: "motor_accident_claims" },
        { label: "Rent Control Cases", value: "rent_control_cases" },
        { label: "Setting up of a Business", value: "setting_up_business" },
        {
          label: "Business Licenses Support",
          value: "business_licenses_support",
        },
        {
          label: "Fundraising for Businesses",
          value: "fundraising_for_businesses",
        },
        {
          label: "Search Engine Optimization",
          value: "search_engine_optimization",
        },
        { label: "Paid Media", value: "paid_media" },
        { label: "Digital PR", value: "digital_pr" },
        { label: "Content", value: "content" },
        {
          label: "Hyper-Relevancy Link Building",
          value: "hyper_relevancy_link_building",
        },
        { label: "PR", value: "pr" },
        { label: "Constituency Profiling", value: "constituency_profiling" },
        { label: "Opinion Polls", value: "opinion_polls" },
        { label: "Data & Analytics", value: "data_analytics" },
        { label: "Campaign Management", value: "campaign_management" },
        {
          label: "Creative & Innovative Content",
          value: "creative_innovative_content",
        },
        { label: "Manifesto Creation", value: "manifesto_creation" },
        { label: "Digital Marketing", value: "digital_marketing" },
        { label: "PR & Advertising", value: "pr_advertising" },
        { label: "Election Monitoring", value: "election_monitoring" },
        { label: "Brand Building", value: "brand_building" },
        { label: "Leadership Training", value: "leadership_training" },
        { label: "Fund Raising", value: "fund_raising" },
        { label: "Movement Building", value: "movement_building" },
        { label: "Tech Assistance", value: "tech_assistance" },
        { label: "All Service", value: "all_service" },
      ],
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],

  websiteField: [
    {
      name: "website",
      title: "Website",
      label: "Website",
      type: "text",
      style: {},
      inputOptionClassName: "",
      required: true,
    },
  ],
};

module.exports = formFields;
