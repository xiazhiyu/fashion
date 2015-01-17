var mongoose = require('mongoose');
//var db = mongoose.createConnection('localhost','myerp'); //创建一个数据库连接
var connect = mongoose.connect('mongodb://localhost/fashion');
/*
db.on('error',console.error.bind(console,'连接错误:'));

db.once('open',function(){
      //一次打开记录
       console.log("cccccccc:");
});
*/


exports.mongoose = mongoose;