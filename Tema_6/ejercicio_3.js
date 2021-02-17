const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

var nombre = "Pablo"
var apellidos = "Pérez Méndez"

app.get('/nombre', function(req, res) {
  res.send({'Nombre':nombre, 'Apellidos':apellidos})
});

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
