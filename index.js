import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import cookie from "cookie";

const app = express();

///THIS MAY HAVE TO BE REFRESHED PERIODICALLY
var cookies = "pw=TAAYVTQC2B; uid=7165SHEFFIELD; ASPSESSIONIDCSTTBSQC=LHODJDCDHMBOJIABPMKOLCIP; ASPSESSIONIDASTTDSRC=LLOLFFCDIMMFOCEBKOPICPHF; _gat=1; _ga=GA1.2.1869469472.1476660900; _gid=GA1.2.324590848.1499350984; ahncookiecheck=Cookie; ASPSESSIONIDCSTTBSQC=LHODJDCDHMBOJIABPMKOLCIP; ASPSESSIONIDASTTDSRC=LLOLFFCDIMMFOCEBKOPICPHF";


//Get Login page
axios.get('http://polohoa.net/main.asp', {
	headers: { 'Cookie': cookies }})
	.then(function (response)
	{
		console.log("***************** MAIN PAGE *****************");
		console.log(response.data);
		

	})
	.catch(function (error) { console.log(error); });



app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})