const express = require("express");
// const fileUpload = require("express-fileupload");
// const pdfParse = require("pdf-parse");
const app = express();
cors = require('cors');

const candidatureRoute = require('./routes/candidature');


require('./config/connect');
app.use(express.json());

app.use(cors());

app.use('/candidature', candidatureRoute); //http://127.0.0.1:3000/candidature




app.listen(3000 , ()=>{
    console.log('server work');
});