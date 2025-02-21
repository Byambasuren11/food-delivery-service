import cors from 'cors';
import express from 'express'
const app = express()
app.use(express.json())
app.use(cors());
const port = 4007

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})