import express from 'express';
const app = express();
const port = 3000;


//set templating engine
app.set('view engine','ejs')

app.get('/', (req, res) => {
  const username= 'yousra z'
  //render the html file
  res.render('templating_engine',{username: username});
});


app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
