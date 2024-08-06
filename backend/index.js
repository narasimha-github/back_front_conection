import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors())


app.get('/getDeta',(req,res) => {
    res.send('Hello')
})


app.listen(4000, () => console.log("Port Running at 4000 server"))
