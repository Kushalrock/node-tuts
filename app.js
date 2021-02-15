const express = require('express');
const path = require('path');
const app = express();

// Setting Your template engine to be pug
app.set('view engine','pug');

// Set the views directory
app.set('views',path.join(__dirname,'views'));

app.listen(10000,()=>{
  console.log("App Started");
})
