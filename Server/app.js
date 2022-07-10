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
  console.log(req);
  res.status(200).send('Acknowledgement.\n');

  // #### OLD CODE ####
  // const { data } = req.body;
  // console.log('Request Message from client:' + data);
  // // Accessing data from request message.
  // var response = String(data);
  // response = response.toUpperCase();
  // console.log(response);
  // // Initial document creation.
  // const doc = new jsPDF();
  // var path_url;
  // var format;
  // if (response === 'NO') {
  //   // Format document
  //   path_url = 'ziaBad.jpg';
  //   format = 'JPEG';
  //   var imgData = fs.readFileSync(path_url).toString('base64');
  //   doc.addImage(imgData, format, 60, 60, 100, 100);
  //   doc.setFontSize(40);
  //   doc.text('Zia is a bad puppy!', 45, 25);
  //   doc.save('response.pdf');
  //   // Send file to client.
  //   return res.status(200).download('./response.pdf');
  // } else if (response === 'YES') {
  //   // Format document
  //   path_url = 'ziaGood.jpg';
  //   format = 'JPEG';
  //   var imgData = fs.readFileSync(path_url).toString('base64');
  //   doc.addImage(imgData, format, 60, 60, 100, 100);
  //   doc.setFontSize(40);
  //   doc.text('Zia is a good puppy!', 45, 25);
  //   doc.save('response.pdf');
  //   // Send file to client.
  //   return res.status(200).download('./response.pdf');
  // }
  // res.status(401).send('Wut, try saying yes or no.');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
