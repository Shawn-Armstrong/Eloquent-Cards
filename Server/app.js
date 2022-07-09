const express = require('express');
const app = express();
const { jsPDF } = require('jspdf');
var fs = require('fs');
var cors = require('cors');

// Override CORS policy.
app.use(cors());

// parse form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/api/user_data', (req, res) => {
  //console.log(req);
  console.log(
    '\n### DATA RECEIVED FROM CLIENT ###\n\n' +
      'Name: ' +
      req.body.name +
      '\n' +
      'Company: ' +
      req.body.company +
      '\n' +
      'Email: ' +
      req.body.email +
      '\n' +
      'Phone Number: ' +
      req.body.phoneNumber +
      '\n\n### END OF REQUEST MESSAGE DATA ###\n'
  );
  res.status(200).send('Acknowledgement.\n');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
