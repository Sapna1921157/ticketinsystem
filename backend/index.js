const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const dotenv = require("dotenv");
dotenv.config("./.env")

app.use(bodyParser.urlencoded({
  extended: true
}));

// parser request data content type application/json
app.use(bodyParser.json());



const userRouter = require('./src/routes/users.route.js');


app.use(cors({
    origin: ["http://localhost:4200"]
  }));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));


// create users routes
app.use('/api/v1/users', userRouter);
app.get("/", (req, res) => {
    res.status(200).send("OK from Server");
})

app.get('*', function (req, res) {
    res.status(404).send('Page Not Found');
  });
  

const PORT = process.env.PORT ;

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})
