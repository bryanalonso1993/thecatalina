const express =require('express');
const hbs = require('hbs');
const wiki = require('./routes/wiki');
const port = process.env.PORT || 3000;
const app = express();

// export routes
app.use('/wiki',wiki);

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});
// motor de plantillas a usar
app.set('view engine','hbs');

// midleware public
app.use(express.static('public'));
hbs.registerPartials(__dirname+'/views/templates');   

//methods
 app.get('/', (req,res)=> {
    console.log(__dirname);
    //res.send('Hello Word');
    res.render(__dirname+'/views/index.hbs');
});

app.get('/about', (req,res)=>{
    res.render(__dirname+'/views/about.hbs');
});