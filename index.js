import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();

const cookie = 'ahncookiecheck=Cookie; ASPSESSIONIDCCAADADQ=BBKBEKDDPBDFGIGNBDLFEFPO; ASPSESSIONIDCCAADADQ=BBKBEKDDPBDFGIGNBDLFEFPO; _ga=GA1.2.1709541301.1498849320; _gid=GA1.2.410086980.1498849320'

axios.get('http://polohoa.net/main.asp', {
  headers: {'Header': cookie,
            'Referer' : 'http://polohoa.net/login.asp?a=1&ahn=1234&bType=&id='}
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})