import request from 'supertest'
import app from '../../server'

describe('Users API endpoints', () => {
  it('should get all users', async () => {
    const response = await request(app).get('/api/users')
    expect(response.status).toBe(200)
  })

  it('should create a new user', async () => {
    const newUser = { username: 'TestUser', email: 'test@example.com', id: 1 }
    const response = await request(app).post('/api/users').send(newUser)
    expect(response.status).toBe(201)
  })
  it('should update a user', async () => {
    const newUser = { username: 'TestUser', email: 'test@example.com', id: 1 }
    await request(app).post('/api/users').send(newUser)
    const response = await request(app)
      .put(`/api/users/${newUser.id}`)
      .send({ ...newUser, username: 'TestAdmin' })
    expect(response.status).toBe(200)
  })

  it('should delete a user', async () => {
    const newUser = { username: 'TestUser', email: 'test@example.com', id: 1 }
    await request(app).post('/api/users').send(newUser)
    const response = await request(app).delete(`/api/users/${newUser.id}`)
    expect(response.status).toBe(204)
  })
})
