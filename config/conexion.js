let mongoose=require('mongoose');
//mongoose.connect('mongodb://localhost:27017/local',{useMongoClient:true});
mongoose.connect('mongodb+srv://user_jm:cenizoR1@cluster0-fh3hl.mongodb.net/test?retryWrites=true&w=majority');

module.exports= mongoose;