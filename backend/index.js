const PORT = 8000

const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = "mongodb+srv://Bubba:BubbaLikesTrucks@freighterdater.4wdoxgb.mongodb.net/?retryWrites=true&w=majority"

const app = express()

app.get('/', (req, res) => {
    res.json('Hello to my app')
})

app.post('/signup', (req, res) => {
    res.json('Hello to my app')
})

app.get('/users', async(req, res) => {
    console.log("user tried accessing")

    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      

    //const client = new MongoClient(uri)
    console.log("hi")

    try {
        // console.log('0')
        await client.connect()
        // console.log('1')
        const database = client.db('app-data')
        await database.command({ping: 1});
        console.log("Connected to db.")
        // console.log('2')
        const msgs = database.collection('messages');
        // console.log(msgs)
        // const query = {from_userID: 'test-1'}
        // const msg = await msgs.findOne(query)
        //const retUsers = users
        //console.log('4')
        res.send(msgs)
        
        // console.log(msg)
    } finally {
        res.json('404')
        console.log('404a')
        // await client.close()
    }
})

app.listen(PORT, () => console.log('Server running on PORT ' + PORT))

