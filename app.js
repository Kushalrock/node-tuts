const express = require('express');
const path = require('path');
const app = express();

//Serving Static files
app.use('/static',express.static('public'));

// Setting Your template engine to be pug
app.set('view engine','pug');

// Set the views directory
app.set('views',path.join(__dirname,'views'));

// Pug
app.get('/demo',(req,res)=>{
  res.render('demo', { title: 'Hey', message: 'Hello there!' })
});

app.get('/',(req,res)=>{
  res.send('Hey there, I am using express');
});

app.get('/about',(req,res)=>{
  res.send('I am just starting to use express(About)');
});

app.post('/about',(req,res)=>{
  res.send('I am just starting to use express(About). Its a post request.');
});

app.get('/services',(req,res)=>{
  res.send('I am a web framework(services)');
});

app.get('/contact',(req,res)=>{
  res.send('Refer to my original site(contact)');
});

app.listen(10000,()=>{
  console.log("App Started");
})
