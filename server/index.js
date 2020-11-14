const express = require ('express');
const app = express();
const router = require ('./router');
const cors = require ('cors');


const port = 3001;

app.use (cors());
app.use(express.json());
app.use(express.static('../client'));
app.use(router);

app.listen (port, () => {
    console.log(`Server hosted at http://localhost:${port}`);
})





