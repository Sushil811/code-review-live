const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const path = require('path')
const app = express();

const _dirname = path.resolve()

app.use(cors())

app.use(express.json()) //if we know this line we'll get an error(undefined body)
app.use(express.static(path.join(_dirname, '/Frontend/dist')));
app.get('*', (_, res)=>{
    res.sendFile(path.resolve(_dirname, 'Frontend', 'dist', 'index.html'))
})

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.use('/ai', aiRoutes);

module.exports = app

