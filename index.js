const request = require('request-promise');

// https://docs.google.com/spreadsheets/d/e/2PACX-1vQcU4xBoBYu3WQA70ScKITs2OjDfJ_OrE914yWcZ-yKMLjfzZKvsL0M0ETshoOHMuqWVRMu9KQM-mGV/pubhtml

const sheetID = '1-CmQumuz5ZiOvINhphEMgfplrJacQhD623RROcOBTAg';
const URL = `https://spreadsheets.google.com/feeds/cells/${sheetID}/1/public/values?alt=json-in-script`;

// https://sheets.googleapis.com/v4/spreadsheets/1-CmQumuz5ZiOvINhphEMgfplrJacQhD623RROcOBTAg/values/Sheet1?key=AIzaSyAGcyCaYHiybVWcEB-Fy78xAcUy9syerd8
https://sheets.googleapis.com/v4/spreadsheets/1J6av2X6hYTplPRCqFCwdGkZTOKkuS5qq4m9FEoagzFk/values/Planilha1?key=AIzaSyC7ESVcHZqTLFLtCvPTSjuzjurtXJO-L5Q

request(URL)
  .then(result => {
    result = result.replace('gdata.io.handleScriptLoaded(','').slice(0, -2);
    const json = JSON.parse(result);
    console.log(JSON.stringify(json.feed.entry));
  })
  .catch(error => {
    console.log(error);
  });
  