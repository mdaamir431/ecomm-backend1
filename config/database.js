var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ecomm-server", {
    useNewUrlParser:true,
    useUnifiedTopology:true

});

 var dtbase = mongoose.connection;

 dtbase.on("open",err =>{
if(!err){
    console.log('ECOMM-SERVER DATABASE IS CONNECTED');
}else{
    console.log('ERROR ECOMM-SERVER IS NOT CONNECTED');
}
 });