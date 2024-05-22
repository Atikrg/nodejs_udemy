const dotenv = require('dotenv');
dotenv.config({path: './config.env'}); 
const app = require('./app')

console.log(app.get('env'));
/* console.log(process.env) */
console.log('hello'); 

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
