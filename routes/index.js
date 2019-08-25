var express = require('express');
var router = express.Router();

let mongoose = require('./../config/conexion');
let Cliente = require('./../models/cliente');

/* GET home page. */
router.get('/', function(req, res, next) {
  Cliente.find((err,clientes)=>{
    if(err) throw err;
    res.render('index', { title: 'Express' ,clientes:clientes});
  });
});

router.get('/cliente/nuevo', function(req, res, next) {
    res.render('clienteForm', {});
});

router.get('/cliente/modificar/:id', function(req, res, next) {
  let idCliente = req.params.id;  
  Cliente.findOne({_id: idCliente }, (err, cliente) => {
    //console.log(persona);
    if (err) throw err;
    res.render('clienteForm', { cliente: cliente });
  });
});

router.get('/cliente/eliminar/:id', (req, res, next) => {
  let idCliente= req.params.id;
  Cliente.remove({_id: idCliente }, (err) => {
    if (err) throw err;
    //o llamar nuevamente a find() y res.render();
    res.redirect('/');
  });
});

module.exports = router;
