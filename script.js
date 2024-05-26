import express from "express"
const app = express()
const port = 3000

process.on('SIGTERM', () => {
    console.log('SIGTERM signal received')
    process.exit()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
