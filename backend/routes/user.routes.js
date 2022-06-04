const router = require("express").Router()
const auth = require("../app/middleware/auth.middleware")
const upload = require("../app/middleware/uploadFile.middleware")
const user = require("../app/controller/user.controller")
router.post("/register", user.register) //user registeration
router.post('/login', user.login)
router.get("/me", auth, user.me)
router.post('/logout', auth, user.logOut)
router.post('/logoutAll', auth, user.logOutAll)
router.patch('/editPassword', auth, user.editPassword)

router.patch('/editUser', auth, user.editUser)
router.patch('/activate', auth, user.activate)
router.patch('/activateWithoutLogin', user.activateWithoutLogin)
router.patch('/changeImage', auth, upload.single('userImg'), user.changeImage)

router.get("/all/:pageNum/:limit", auth, user.allUsers)
router.get("/all/:id", user.singleUser)
module.exports = router
