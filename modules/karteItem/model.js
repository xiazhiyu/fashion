var mongodb = require('../../db/mongodb');
var Schema = mongodb.mongoose.Schema;

var KarteItemSchema = new Schema({
  name : String,
  title : String,
  type : String,
  list : [],
  picList : []
});

var KarteItem = mongodb.mongoose.model("KarteItem", KarteItemSchema,"karteItem");

var KarteItemDao = function(){};

KarteItemDao.prototype.findByName = function(name, callback) {
   console.log("name:"+name);
  KarteItem.findOne({name: name}, function(err, obj){
    console.log("result:"+obj);
    console.log("err:"+err);
    callback(err, obj);
  });
};

KarteItemDao.prototype.getList = function(callback){
  KarteItem.find({},function(err,list){
    callback(err, list);
  });
}

KarteItemDao.prototype.deleteByeId = function(_id, callback) {
  KarteItem.findByIdAndRemove(_id, function(err){
    callback(err);
  });
};


KarteItemDao.prototype.save = function(element, callback){  
  KarteItem.find({name: element.name},function(err,docs){
    if(docs.length){
       callback(-1);
    }else{
      var karteItem = new KarteItem(element);
      karteItem.save(function(err,_id){
        callback(err,_id);
      });
    }
  }); 
}

KarteItemDao.prototype.update = function(element, callback){  
  var _id = element._id;
  delete element._id; 
  KarteItem.update({_id: _id}, element,function(err){
    callback(err);
  });
}


module.exports = new KarteItemDao();