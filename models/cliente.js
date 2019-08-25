let mongoose=require('mongoose');
let Schema= mongoose.Schema;

let clienteSchema = new Schema({
    id:{type:String},
    nombre:{type:String},
    apellido:{type:String},
    edad:{type:Number,min:0,max:90}
},{versionKey:false});

let Cliente= mongoose.model('clientes',clienteSchema);
module.exports=Cliente;
