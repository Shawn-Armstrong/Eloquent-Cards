const express = require('express');
const app = express();
const path = require('path');
var fs = require('fs');
var cors = require('cors');
const { jsPDF } = require('jspdf');
const font = require('./lib/Sen-Regular-normal.js');
const tmpjson = require('./assets/Templates.json');
const CardGenerator = require('./lib/CardGenerator.js');

app.use(cors());

font.add_font(jsPDF);

// parse form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/api/download_card', (req, res) => {
  console.log(
    '\n### DATA RECEIVED FROM CLIENT ###\n\n' +
      'Name: ' +
      req.body.cardInfo.personalInfo.name +
      '\n' +
      'Title: ' +
      req.body.cardInfo.personalInfo.title +
      '\n' +
      'Company: ' +
      req.body.cardInfo.personalInfo.companyName +
      '\n' +
      'Email: ' +
      req.body.cardInfo.personalInfo.email +
      '\n' +
      'Website: ' +
      req.body.cardInfo.personalInfo.website +
      '\n' +
      'Phone Number: ' +
      req.body.cardInfo.personalInfo.phoneNumber +
      '\n' +
      'Address:' +
      req.body.cardInfo.personalInfo.address +
      '\n' +
      'Template Number: ' +
      req.body.cardInfo.templateInfo +
      '\n\n### END OF REQUEST MESSAGE DATA ###\n'
  );

  var f_url = 'assets/' + req.body.cardInfo.templateInfo + 'f.jpg';
  var f_data = fs.readFileSync(f_url).toString('base64');

  var b_url = 'assets/' + req.body.cardInfo.templateInfo + 'b.jpg';
  var b_data = fs.readFileSync(b_url).toString('base64');

  var t_url = 'tp2.jpg';
  var t_data = fs.readFileSync(t_url).toString('base64');

  let config = {
    name: req.body.cardInfo.personalInfo.name,
    phone_number: req.body.cardInfo.personalInfo.phoneNumber,
    email: req.body.cardInfo.personalInfo.email,
    website: req.body.cardInfo.personalInfo.website,
    address: req.body.cardInfo.personalInfo.address,
    icon_data: '', //hard coded rn
    company: req.body.cardInfo.personalInfo.companyName,
  };

  let template = {
    text_json: tmpjson[0], //0 is hard coded
    front_imgdata: f_data,
    back_imgdata: b_data,
  };

  //desired minimum size of pdf, generator will draw at 10, 10 by default
  const doc = new jsPDF({
    format: [110, 130],
    unit: 'mm',
  });

  //load empty jspdf object and user inputs into generator
  let card_generator = new CardGenerator(doc, config);
  //pass the template to draw
  card_generator.draw(template);

  doc.save('response.pdf');
  return res.status(200).download('./response.pdf');
});

app.post('/api/preview_card', (req, res) => {
  // Generate pdf
  var f_url = 'assets/' + req.body.cardInfo.templateInfo + 'f.jpg';
  var f_data = fs.readFileSync(f_url).toString('base64');

  var b_url = 'assets/' + req.body.cardInfo.templateInfo + 'b.jpg';
  var b_data = fs.readFileSync(b_url).toString('base64');

  var t_url = 'tp2.jpg';
  var t_data = fs.readFileSync(t_url).toString('base64');

  let config = {
    name: req.body.cardInfo.personalInfo.name,
    phone_number: req.body.cardInfo.personalInfo.phoneNumber,
    email: req.body.cardInfo.personalInfo.email,
    website: req.body.cardInfo.personalInfo.website,
    address: req.body.cardInfo.personalInfo.address,
    icon_data: '', //hard coded rn
    company: req.body.cardInfo.personalInfo.companyName,
  };

  let template = {
    text_json: tmpjson[0], //0 is hard coded
    front_imgdata: f_data,
    back_imgdata: b_data,
  };

  //desired minimum size of pdf, generator will draw at 10, 10 by default
  const doc = new jsPDF({
    format: [110, 130],
    unit: 'mm',
  });

  //load empty jspdf object and user inputs into generator
  let card_generator = new CardGenerator(doc, config);
  //console.log(card_generator.input_stats());
  //pass the template to draw
  card_generator.draw(template);
  doc.save('response.pdf');

  // Convert pdf to base64
  var tempFile = path.resolve(__dirname, './response.pdf');
  var pdfBase64 = fs.readFileSync(tempFile).toString('base64');

  res.setHeader('Content-Type', 'application/json');
  return res.send(JSON.stringify({ pdfData: pdfBase64 }));
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
