const express=require('express')
const router=express.Router()

const { leave,Cancleleave,approval}=require('../../controller/Leavecontroller/Takeleave')
const { auth, isEmployees, isAdmin } = require("../../midlewere/Auth")

router.post("/TakeLeave",auth,isEmployees, leave)
router.post("/CancleLeave",auth, Cancleleave)
router.post("/approve",auth,isAdmin, approval)
//router.post("/refresh",auth, addleave)

// Export the router for use in the main application
module.exports = router