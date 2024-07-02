const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

var iPortaTcp = 4201;
var sIpAddress = "172.19.227.84"

app.listen(iPortaTcp,sIpAddress, () => console.log('API is running on http://' + sIpAddress + ':' + iPortaTcp));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//PRIMA ROUTE
app.get('', (req, res) => {
console.log("Mi hai chiesto la pagina iniziale");
res.sendFile("index.html", { root: './htdocs' });
});

//SECONDA ROUTE
app.get('/registrazione', (req, res) => {
    console.log("Mi hai chiesto la pagina registrazione");
    res.sendFile("registrazione.html", { root: './htdocs' });
    });

//TERZA ROUTE
app.get('/accedi', (req, res) => {
    console.log("Mi hai chiesto la pagina accedi");
    res.sendFile("accedi.html", { root: './htdocs' });
    });

//Formroute
app.get('/gestisciDatiForm', (req, res) => {
    console.log("Mi hai chiesto la pagina della form");
    res.send("<html><body>Ciao " + req.query.fname +"</body></html>")
    });