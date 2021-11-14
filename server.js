const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/coding', (req, res) => {
    res.render('coding.ejs');
});
app.get('/web', (req, res) => {
    res.render('web.ejs');
});
app.get('/ai', (req, res) => {
    res.render('ai.ejs');
});
app.get('/blockchain', (req, res) => {
    res.render('blockchain.ejs');
});
app.get('/cyber', (req, res) => {
    res.render('cyber.ejs');
});
app.get('/cloud', (req, res) => {
    res.render('cloud.ejs');
});

app.listen(process.env.PORT || 5000, process.env.IP, () => console.log("Server is Running at PORT 5000...."));