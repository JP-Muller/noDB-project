require('dotenv').config({ path: __dirname + '/../.env' })
const express = require('express')
const lc = require('./controllers/listController')
const qc = require('./controllers/quoteController')
const app = express()
const { SERVER_PORT } = process.env
// const port = 4200
// const port = process.env.PORT || 4200

//middleware

app.use(express.json())


app.get('/api/entries', lc.dailyEntries)

app.get('/api/backgrounds')

app.post('/api/entries', lc.addItem)

app.put('/api/entries/:id', lc.updateItem)

app.delete('/api/entries/:id', lc.deleteEntry)



// Quotes
app.get('/api/quotes', qc.grabQuotes)

app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${SERVER_PORT}`)
})