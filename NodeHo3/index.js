const express = require("express");
const app = express();
const PORT = 3000;


const specificMiddleware = (req, res, next) => {
  console.log('This middleware applies to specific routes');
  next();
};

const specificMiddlewareTwo = (req, res, next) => {
  console.log('This middleware applies to specificTwo routes');
  next();
};

app.use(specificMiddleware);

app.get('/',(req,res)=>{
  res.send("Home Route")
  console.log("Home")
})

app.get('/api',(req,res)=>{
  res.send("Api Route")
  console.log("API")
})

app.get('/login', (req, res) => {
  res.send('This is login page');
  console.log("login")
});

app.get('/signup', specificMiddlewareTwo, (req, res) => {
  res.send('This is signup page');
  console.log("signup")
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});