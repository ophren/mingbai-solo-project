const express = require ('express');
const app = express();
const router = require ('./router');
// const bodyParser = require('body-parser');
const cors = require ('cors');

const port = 3001;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use (cors());
app.use(express.json());
app.use(express.static('../client'));
app.use(router);

app.listen (port, () => {
    console.log(`Server hosted at http://localhost:${port}`);
})





