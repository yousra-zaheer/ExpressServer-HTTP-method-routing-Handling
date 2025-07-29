import express from 'express';
import { searchcontroller, usercontroller} from './controller.js';
import router from './route.js';
const app = express();
const port = 3000;

//define a route
app.get('/', (req, res) => {
  res.send('This is ServerExpress.js server running on port 3000');
});

//define an about route
app.get('/about', (req, res) => {
  res.send('This is about route');
});

//defined dynamic route for user profile in controller.js is being imported here
app.get('/user/:username', usercontroller);

//define dynamic route for search query is being imported here thru controller.js file
app.get('/search', searchcontroller);

//importing route from route.js
app.use('/user',router);
//this will handle to parse JSON body , middleware.
app.use(express.json());

app.post('/users'/*,express.json()*/,(req,res)=>{
  const {name,email}=req.body;
  res.json({
    message:`user ${name} with email ${email} created successfully`
  })
})

app.put('/users/:id'/*,express.json()*/,(req,res)=>{
  const userid=req.params.id
  const {name,email}=req.body;
  res.json({
    message:`user id updated ${userid} with name ${name} and email ${email}`
  })
})

app.delete('/users/:id'/*,express.json()*/,(req,res)=>{
  const userid=req.params.id
  res.json({
    message:`user id deleted ${userid} successfully`
  })
})

//to get  more parameters in the url digits 0-9 and length {5}
app.get('/things/:name/:id',(req,res)=>{
  const {name,id}=req.params
   /*if (!/^\d{5}$/.test(id)) {
    return res.status(400).json({ error: 'Invalid id. Id should be a 5-digit number.' });
  }*/

  res.json({
    id,
    name
  })
})

//catch all invalid routes
app.use((req, res) => {
  res.status(404).send('Sorry, invalid URL');
});


app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
