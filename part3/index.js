
const express = require('express')
const app = express()

let persons = [
      {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      }
    ]

    app.get('/', (request, response) => {
        response.send("<h1>Hola mundo</h1>")
    })
    
    app.get('/api/persons', (request, response) => {
        response.json(persons)
    })
    
    app.get('/info', (request, response) => {
        response.send(`<p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>`)
    })

    app.get('/api/persons/:id', (request, response) => {
    //    console.log(request.params.id);
        const id = Number(request.params.id)
       
    //    console.log("typeof id", typeof id , id);
        if (!id) {
            return response.status(404).end()
        }
        const person = persons.find(person => person.id === id)
    //    console.log(typeof person, person, person );
    //    console.log(typeof values, values, values[0] );
    //    console.log(id);
        if (!person) {
            return response.status(404).end()
        }  
        const values = Object.values(person)
        if (values[1]==="") {
            return response.status(204).end()
        }
        response.send(values[1])
    })

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
