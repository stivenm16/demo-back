import express from 'express'

const usersRouter = express.Router()
let users = []
usersRouter.get('/users', (req, res) => {
  console.log(users)
  res.json(users)
})

usersRouter.post('/users', (req, res) => {
  try {
    const newUser = req.body
    users.push(newUser)
    res.status(201).json(newUser)
  } catch (e) {
    console.log(e)
  }
})

usersRouter.put('/users/:id', (req, res) => {
  const { id } = req.params
  const updatedUserInfo = req.body

  users = users.map((user) =>
    user.id === parseInt(id) ? { ...user, ...updatedUserInfo } : user,
  )

  res.json(users.find((user) => user.id === parseInt(id)))
})

usersRouter.delete('/users/:id', (req, res) => {
  const { id } = req.params

  users = users.filter((user) => user.id !== parseInt(id))

  res.status(204).send()
})

export default usersRouter
