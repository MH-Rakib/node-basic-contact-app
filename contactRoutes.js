const router = require("express").Router();
const {
  getAllContact,
  createContact,
  getContactById,
  updateContactById,
  deleteContactById,
} = require("./contactController");

router.get("/", getAllContact);
router.post("/", createContact);
router.get("/:id", getContactById);
router.put("/:id", updateContactById);
router.delete("/:id", deleteContactById);

module.exports = router;
