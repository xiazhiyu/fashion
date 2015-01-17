var mongodb = require('../../db/mongodb');
var Schema = mongodb.mongoose.Schema;

var UserSchema = new Schema({
  email : String,
  password : String,
  status : Number,
  createTime: Date
});

var User = mongodb.mongoose.model("User", UserSchema,"user");

var UserDao = function(){};

UserDao.prototype.findByEmail = function(email, callback) {
   console.log("email:"+email);
  User.findOne({email: email}, function(err, obj){
    console.log("result:"+obj);
    console.log("err:"+err);
    callback(err, obj);
  });
};

UserDao.prototype.deleteByeId = function(_id, callback) {
  User.findByIdAndRemove(_id, function(err){
    callback(err);
  });
};


UserDao.prototype.save = function(element, callback){  
  User.find({email: element.email},function(err,docs){
    if(docs.length){
       callback(-1);
    }else{
      var user = new User(element);
      user.save(function(err,_id){
        callback(err,_id);
      });
    }
  }); 
}

UserDao.prototype.update = function(element, callback){  
  var _id = element._id;
  delete element._id; 
  User.update({_id: _id}, element,function(err){
    callback(err);
  });
}


module.exports = new UserDao();