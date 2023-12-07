import express from 'express'

const usersRouter = express.Router()

usersRouter.get('/users', (req, res) => {
  res.json(users)
})

// usersRouter.get('/getAllUsers', getAllUsers)

usersRouter.post('/users', (req, res) => {
  const newUser = req.body
  users.push(newUser)
  res.status(201).json(newUser)
})

// Update a user by ID
usersRouter.put('/users/:id', (req, res) => {
  const { id } = req.params
  const updatedUserInfo = req.body

  users = users.map((user) =>
    user.id === parseInt(id) ? { ...user, ...updatedUserInfo } : user,
  )

  res.json(users.find((user) => user.id === parseInt(id)))
})

// Delete a user by ID
usersRouter.delete('/users/:id', (req, res) => {
  const { id } = req.params

  users = users.filter((user) => user.id !== parseInt(id))

  res.status(204).send()
})

export default usersRouter
