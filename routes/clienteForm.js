let express = require('express');
let router = express.Router();

let mongoose = require('./../config/conexion');
let Cliente = require('./../models/cliente');

router.post('/cliente/operar', (req, res, next) => {
  console.log(req.body);  

  if (req.body._id === "") {
    let per = new Cliente({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      edad: req.body.edad
    });
    per.save();
  } else {    
    console.log(req.body._id+"id_final");
    Cliente.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/');
});

module.exports = router;