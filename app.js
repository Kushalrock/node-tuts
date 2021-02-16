const express = require('express');
const path = require('path');
const port= 10000;
const app = express();

app.use('/static',express.static('public'));
// PUG CONFIGURATION
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

// ENDPOINTS
app.get('/',(req,res)=>{
  const params = {content: 'This has been sent as params'};
  res.status(200).render('index.pug',params);
})
app.listen(port,()=>{
  console.log("App Started");
})
