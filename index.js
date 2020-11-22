// import express
const express = require('express')

const app = express()

const page = `
<html>
  <head>
    <title>Pamela Feijo</title>
  </head>

  <body>
    <h1>What’s the difference between Dubai and Abu Dhabi? </h1>
    <p>People in Dubai don’t like the Flinstones but people in Abu Dhabi doooooooooooooooooo!</p>
    <hr>
    <h1>What do you call a broken can opener?</h1>
    <p>A can’t opener.</p>
  </body>
</html>`

app.get(
    '/', 
    (request, response)=> {
    response.send(page)
    }  
  )

  const port = process.env.PORT || 3000

app.listen(
  port,
  () => console.log(`Listening on :${port}`)
)