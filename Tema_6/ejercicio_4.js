const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

var nombre = "Pablo"
var apellidos = "Pérez Méndez"
var edad = 22

app.get('/nombre', function(req, res) {
  res.send({'Nombre':nombre, 'Apellidos':apellidos})
});

app.get('/edad', function(req, res) {
  var html = "La edad del admin es de " + edad + " años"
  res.send(html)
});

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});

module.exports = app;
