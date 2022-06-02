const express = require('express');

const mongoose = require('mongoose');

const app = express();

const port = 3000;

app.use(express.json());

// app.use(router)
// app.use(router)
// app.use(router)

mongoose.connect('mongodb+srv://Harris:dasaev95@cluster0.nybsciz.mongodb.net/?retryWrites=true&w=majority').then(()=>{

    console.log('mongo conected!')

}).catch(()=>{ console.log('eror 404')});


app.listen(port, ()=>{
    console.log('server started!')
});