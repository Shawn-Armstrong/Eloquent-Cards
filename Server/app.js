const express = require('express');
const app = express();
const { jsPDF } = require('jspdf');
var fs = require('fs');
var cors = require('cors');

const font = require("./lib/Sen-Regular-normal.js");
font.add_font(jsPDF);
const CardGenerator = require("./lib/CardGenerator.js");

const tmpjson = require("./assets/Templates.json");
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


  let config = {
    name: req.body.cardInfo.personalInfo.name,
    phone_number: req.body.cardInfo.personalInfo.phoneNumber,
    email: req.body.cardInfo.personalInfo.email,
    website: req.body.cardInfo.personalInfo.website,
    address: req.body.cardInfo.personalInfo.address,
    icon_data: '', //hard coded rn
    company: req.body.cardInfo.personalInfo.companyName
  };

  let template = {
    text_json: tmpjson[0],   //0 is hard coded
    front_imgdata: f_data,
    back_imgdata: b_data
  }

  //desired minimum size of pdf, generator will draw at 10, 10 by default
  const doc = new jsPDF({
    format: [110, 130],
    unit: "mm"
  });

  //load empty jspdf object and user inputs into generator
  let card_generator = new CardGenerator(doc, config);
  //pass the template to draw
  card_generator.draw(template);

  doc.save('response.pdf');
  return res.status(200).download('./response.pdf');

});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
