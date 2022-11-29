
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

/* BEGIN - create routes here */
app.get('/users', (req, res) => {
  res.send(users)
})

app.get(`/users/:_id`, (req, res) => {
  res.send(req.params)
})

app.post(`/users`, (req, res) => {
  users.push({
    "_id": 6,
        "name": "Bob Builder",
        "occupation": "FBI Agent",
        "avatar": "https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg"
  })
})

app.put(`/users/1`, (req, res) => {
  res.send(users[0])
})
/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))