// import express
const express = require('express')

const app = express()

const page = `
<html>
  <head>
    <title>Pamela Feijo</title>
  </head>

  <body>
    <h1>This displays the joke</h1>
    <p>punchline</p>
  </body>
</html>`

app.get(
    '/', // route
    (request, response)=>{
    response.send(page)
    }  // handler callback
  )



const port = 3000

// start listening
app.listen(
  port,
  () => console.log(`Listening on :${port}`)
)