const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST");
//     // res.send("Hello, we got your request! This is a response")
//     // res.send({ color: 'red' })
//     // res.send('<h1>This is my webpage</h1>')
// })

// /cats => 'meow'
// /dogs => 'woof'
// '/'
app.get('/', (req, res) => {
    res.send("This is the homepage!!")
})

app.post('/cats', (req, res) => {
    res.send('Post request to /cats!!! This is a post request, not a response request')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('Woof!!!')
})

app.get('*', (req, res) => {
    res.send('I do not know that path')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})