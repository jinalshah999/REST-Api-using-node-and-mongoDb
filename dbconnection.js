const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/demo1';

mongoose.connect(url,{ useNewUrlParser: true },function(err){
if(err){
    console.log('error');
}
else{
    console.log('connected');
}
});
module.exports=mongoose;