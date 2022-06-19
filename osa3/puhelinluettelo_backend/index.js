const express = require('express')
const app = express()
app.use(express.json())



let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-532522"
    },
    {
        id: 3, 
        name: "Dan Abramov",
        number: "12-42-23445"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-28344"
    }
]

const info = () => {
    const contact_amount = persons.length
    const time_is = new Date()
    return (
        `<p>Phonebook has info for ${contact_amount} people <br/> ${time_is} </p>`
    )
}

const generateId = () => {
    const max = 1000
    const randomId = Math.floor(Math.random() * max)
    return randomId
  }



app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    if (!persons.find(person => person.id === id)) {
        return res.status(400).json({
            error: 'Contact not existing'
        })
    }
    res.json(persons.find(person => person.id === id))
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})


app.post('/api/persons', (request, response) => {
    
    const body = request.body
    
    // body shows up as undefined, why? 
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }
    if (!persons.map(person => person.name !== body.name)) {
        return response.status(400).json({
            error: 'name already in the list'
        })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number,
    }

    persons = persons.concat(person)

    response.json(person)
})


app.get('/info', (req, res) => {
    res.send(info())
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})