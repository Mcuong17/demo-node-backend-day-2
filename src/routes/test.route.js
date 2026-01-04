const express = require("express")
const router = express.Router()


router.get("/test-success", (req, res) => {
    res.success({
        message: "Hello-sucess"
    }, 200)
})

router.get("/test-error", (req, res) => {
   throw new Error("Test exception")
})

module.exports = router