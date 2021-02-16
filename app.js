const express = require('express');
const path = require('path');
const port= 10000;
const app = express();
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/pugprojdatabase');

// MONGOOSE STUFF
var contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});
var Contact = mongoose.model('Contact',contactSchema);

app.use('/static',express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// PUG CONFIGURATION
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

// ENDPOINTS
app.get('/',(req,res)=>{
  const params = {content: 'This has been sent as params'};
  res.status(200).render('index.pug',params);
});
app.post('/',(req,res)=>{
  console.log(req.body);
  var myData = new Contact(req.body);
  myData.save().then(()=>{res.send("Successfully Updated the database");}).catch(()=>{res.status(400).send("Some problem occured");});
  //res.status(200).render('index.pug');
});
app.listen(port,()=>{
  console.log("App Started");
})
