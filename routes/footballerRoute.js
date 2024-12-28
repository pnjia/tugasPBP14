const express = require("express");
const {
  getLigabelanda,
  getLigainggris,
  getLigajerman,
  getLigaprancis,
  getLigaspanyol,
  insertFootballer,
  updateFootballer,
  deleteFootballer,
} = require("../controllers/footballerController");

const router = express.Router();

router.get("/ligabelanda", getLigabelanda);
router.get("/ligainggris", getLigainggris);
router.get("/ligajerman", getLigajerman);
router.get("/ligaprancis", getLigaprancis);
router.get("/ligaspanyol", getLigaspanyol);
router.post("/pemain/:liga", insertFootballer);
router.put("/pemain/:liga/:id", updateFootballer);
router.delete("/pemain/:liga/:id", deleteFootballer);

module.exports = router;
