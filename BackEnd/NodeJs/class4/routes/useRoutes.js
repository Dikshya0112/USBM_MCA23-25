const express = require("express");

const {
  registerUser,
  getUserById,
  getAllUSers,
  updateUser,
  deleteUser
} = require("../controllers/useControllers");

const router =  express.Router()

router.post('/register', registerUser)
router.get("/", getAllUSers)
router.get(":/id" , getUserById)
router.patch(":/id" , updateUser)
router.delete(":/id" , deleteUser)

module.exports = router