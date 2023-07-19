const express = require("express");
const {
  GetAllSpeaker,
  GetOneSpeaker,
  DeleteSpeaker,
  CreateSpeaker,
} = require("../Controller/SpeakeController");
const router = express.Router();

//* Get all the Speakers

router.get("/", GetAllSpeaker);
//* Get One User
router.get("/:id", GetOneSpeaker);
//* Delete One User
router.delete("/delete/:id", DeleteSpeaker);
//* Create A Speaker
router.post("/create", CreateSpeaker);

module.exports = router;
