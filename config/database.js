var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mohitakki:K8kyl8wsitfSS28x@cluster0.pdsrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
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