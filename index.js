const GoogleSpreadsheet = require('google-spreadsheet');
const credentials = require('./client-secret.json');

const doc = new GoogleSpreadsheet('1J6av2X6hYTplPRCqFCwdGkZTOKkuS5qq4m9FEoagzFk');

doc.useServiceAccountAuth(credentials, err => {


  doc.getInfo((err, info) => {

    info.worksheets[0].getRows(1, (err, rows) => {

      const data = [];

      console.log(rows[0]);

      for (row of rows) {

        const novoModelo = {
          nome: row.modelo,
          de: row.de,
          ate: row['até'],
          moto: row.moto,
          polmoto: row.pol,
          passageiro: row.passageiro,
          polpassageiro: row.pol_2,
          mot: row.mot,
          polmot: row.pol_3,
          carona: row.carona,
          polcarona: row.pol_4,
          traseira: row.traseira,
          poltraseira: row.pol_5,
          fotos: [ row.fotoengate, row.fotoengate_2 ],
          videos: [ row.videoengate, row.videoengate_2 ]
        };

        const marcaEncontrada = data.find(element => {
          return element.marca === row.marca;
        });

        if (!marcaEncontrada) {
          const novaMarca = {
            marca: row.marca,
            modelos: [ novoModelo ]
          };

          data.push(novaMarca);
          continue;
        }

        marcaEncontrada.modelos.push(novoModelo);
      }

      console.log(JSON.stringify(data));

    });

  });

})