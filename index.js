const GoogleSpreadsheet = require('google-spreadsheet');
const credentials = require('./client-secret.json');

const doc = new GoogleSpreadsheet('1J6av2X6hYTplPRCqFCwdGkZTOKkuS5qq4m9FEoagzFk');

doc.useServiceAccountAuth(credentials, err => {

  doc.getInfo((err, info) => {
    console.log(info);
  });

})