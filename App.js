import express from 'express'
import cors from 'cors'

const PORT = 9999

const app = express()

app.use(cors())
app.use(express.json())

const fahrzeuge = []

app.post('/api/fahrzeuge', (req, res) => {
  const fahrzeug = req.body
  console.log(fahrzeug);
  fahrzeuge.push(fahrzeug)
  res.end()
})

app.get('/api/fahrzeuge', (_, res) => {
  res.json(fahrzeuge)
})

app.listen(PORT, () => console.log("ich stehe vor der Tür mit der Nummer", PORT))