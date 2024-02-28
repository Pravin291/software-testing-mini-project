import express from 'express'
import { Testing, getMyprofile, login, logout, register,} from '../controllers/funct.js'
import { isAuthenticated } from '../middleware/auth.js'

const router = express.Router()


router.post("/users/new", register)

router.post("/users/login", login)

router.get("/users/logout", logout)


router.get("/users/profile",isAuthenticated,getMyprofile)

router.post("/users/testing_data",Testing)


export default router;