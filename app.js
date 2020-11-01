const express =require('express');
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const app = express();



// motor de plantillas a usar
app.set('view engine','hbs');
hbs.registerPartials(path.join(__dirname,'/views/templates'));

// midleware public
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



// export routes
app.use('/wiki', require('./routes/wiki'));
app.use('/login',require('./routes/login'));
app.use('/links', require('./routes/links'));


app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});

//methods
 app.get('/', (req,res)=> {
    // console.log(__dirname);
    //res.send('Hello Word');
    res.render(path.join(__dirname,'/views/links/index.hbs') );
});

app.get('/about', (req,res)=>{
    res.render(path.join(__dirname,'/views/links/about.hbs'));
});