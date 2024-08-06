import { Router } from "express";

const router = Router()

router.get('/users', (req, res) => {
  res.json("Hello users!")
})

export { router as usersRouter }
