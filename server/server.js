const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOption = {
  origin: 'http://localchost:8081',
};

app.use(cors(corsOption));

//parse request of content-type - appliation/json
app.use(bodyParser.json());

//parse request of content-type -application/x-www-form-url-encoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to u11' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const db = require('./models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });
