import { Router } from "express";

const router = Router()

// Get all users
router.get('/users', (req, res) => {
  res.json("Hello users!")
})

export { router as usersRouter }
