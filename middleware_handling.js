import express from 'express';
import router from './route.js';
const app = express();
const port = 3000;

//middleware that displays the next requested route,logging time of request
//also if added path '/welcome ' it will log the time of request for that path
app.use('/welcome',(req,res,next)=>{
  console.log('A new request received at '+ Date.now())
  console.log('Start');
  res.on('finish',()=>{
    console.log('End');
  })
  next();
})

//defining a route
app.get('/', (req, res) => {
  res.send('Hello ServerExpress');
});


//middleware for '/welcome' route
app.get('/welcome', (req, res) => {
  console.log('Middleware');
  res.send('Welcome to ServerExpress');
});

//importing route from route.js in which router level middleware is defined
app.use('/user',router);

//Error handling middleware 
app.get('/error',(req,res)=>{
    throw new Error('This is a text error')
})
app.use((err,req,res,next)=>{
    console.error(err.message)
    res.send('Internal server error')
})

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});