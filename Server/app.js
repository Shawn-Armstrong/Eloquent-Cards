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

app.post('/api/download_card', (req, res) => {
  console.log(
    '\n### DATA RECEIVED FROM CLIENT ###\n\n' +
      'Name: ' +
      req.body.cardInfo.personalInfo.name +
      '\n' +
      'Company: ' +
      req.body.cardInfo.personalInfo.company +
      '\n' +
      'Email: ' +
      req.body.cardInfo.personalInfo.email +
      '\n' +
      'Phone Number: ' +
      req.body.cardInfo.personalInfo.phoneNumber +
      '\n' +
      'Template Number: ' +
      req.body.cardInfo.templateInfo +
      '\n\n### END OF REQUEST MESSAGE DATA ###\n'
  );

  const doc = new jsPDF('l', 'in', [7, 11.75]);
  var path_url = 'assets/' + req.body.cardInfo.templateInfo + 'f';
  var format = 'JPEG';
  var imgData = fs.readFileSync(path_url).toString('base64');
  doc.addImage(imgData, format, 0, 0);
  doc.save('response.pdf');
  return res.status(200).download('./response.pdf');

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
