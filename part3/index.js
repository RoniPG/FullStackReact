
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

morgan.token("req-body", (req) => {
    if (req.method === "POST") {
        return JSON.stringify(req.body)
    }
    return ""
})

app.use(
    morgan(
        ":method :url :status :res[content-length] - :response-time ms :req-body"
    )
)

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

    app.delete('/api/persons/:id', (request, response) => {
        const id = Number(request.params.id)
        if (!id) {
            return response.status(404).end()
        }
        const person = persons.find(person => person.id === id)
        if (!person) {
            return response.status(404).end()
        }
        persons = persons.filter(person => person.id !== id)
        response.status(204).end()
        // console.log("persons: ", persons);
        // console.log("newPersons: ", newPersons);
    })

    app.post('/api/persons', (request, response) => {
        // console.log("request.body: ", request.body, "\ntypeof request.body: ", typeof request.body);
        // console.log();
        const person = request.body
        // console.log("person: ", person, "\ntypeof person: ", typeof person);
        // console.log("person.name :", person.name);
        if (!person.name){
            return response.status(400).json({
                error: "name is missing"
            })
        }
        if (!person.number){
            return response.status(400).json({
                error: "number is missing"
            })
        }
        const nameFound = persons.filter(p => (p.name === person.name))
        // console.log("nameFound : ",nameFound.toString());
        if (nameFound.toString() !== "") {
            return response.status(400).json({
                error: "name must be unique"
            })
        }
        // console.log("nameFound: ", nameFound);
        person.id = Math.random() * 10e16
        // console.log("person.id: ", person[0].id);
        persons = persons.concat(person)
        // console.log({person});
        response.status(201).json(person)
    })
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    // console.log(`Server running on port ${PORT}`)
})
