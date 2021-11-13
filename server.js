const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));

app.get('/', (req,res)=>{
    res.render('index.ejs');
});

app.listen(process.env.PORT || 5000,process.env.IP, () => console.log("Server is Running...."));