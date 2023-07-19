const express = require("express");
const router = express.Router();
const {
  DeleteConf,
  GetOneConf,
  GetAllConf,
  UpdateConf,
  CreateConf, 
} = require("../Controller/ConferenceController");


//* Create a conference 
router.post("/create" , CreateConf)
//* get all the conferences
router.get("/", GetAllConf);

//* get a specific conference
router.get("/:id", GetOneConf);
//* Delete a conference
router.delete("/delete/:id", DeleteConf);
//* Update a conference 
router.put("/update/:id" , UpdateConf)

module.exports=router
