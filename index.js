const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT ||5050)