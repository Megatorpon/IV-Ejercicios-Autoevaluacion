const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/nombre', function(req, res) {
  res.send({'Nombre':'Pablo Pérez Méndez'})
});

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
