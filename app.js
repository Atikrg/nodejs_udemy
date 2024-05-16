const express = require('express')
const fs = require('fs');

const app = express();

/* app.get('/',(req, res)=>{
  res.status(200)
  .json({
    message: "hello from the server",
    app: "Natours"
  })
})
 */


const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours
    }
  })
})

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on ${port}`)
})