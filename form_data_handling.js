import express from 'express';
import multer from 'multer';

const app = express();
// Set up multer for file uploads   
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploades');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });
const port = 3000;

//middleware
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.post('/form', upload.single('public'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send('form received');
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
