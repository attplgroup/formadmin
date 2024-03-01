const router = require("express").Router();
const FormDataController = require("../controller/formData.controller");

router.get("/getFormData/:formType", FormDataController.getFormData);
router.post("/postFormData", FormDataController.postFormData);
router.put("/updateFormData/:formId", FormDataController.updateFormData);
router.delete("/deleteFormData/:formId", FormDataController.deleteFormData);

module.exports = router;
