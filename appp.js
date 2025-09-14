const express = require('express');
const app = express();
const { engine } = require('express-handlebars');

const path=require('path');
const userRoutes=require('./routes/useroutes');


app.engine('hbs', engine({ extname: 'hbs' ,defaultLayout: false}));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
//to work req.body
app.use(express.urlencoded({ extended: true }))



app.use(userRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
