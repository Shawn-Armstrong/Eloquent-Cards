const express = require('express');
const app = express();

// // static assets
// app.use(express.static('./public'));

// parse form data
app.use(express.urlencoded({ extended: false }));

app.post('/api/user_data', (req, res) => {
  const { data } = req.body;
  console.log('Request Message from client:' + data);

  var str = String(data);
  str = str.toUpperCase();
  console.log(str);

  if (str === 'NO') {
    return res.status(200).send(`Zia is a bad puppy :[ .`);
  } else if (str === 'YES') {
    return res.status(200).send(`Zia is a good puppy :] .`);
  }
  res.status(401).send('Wut');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
