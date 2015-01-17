var express = require('express');
var model = require('./model.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  model.getList(function(err,list){
    if(err){
      res.status(500).send('取得失敗しました。');
    }else{
      res.send(list);
    }
  });
  
});

router.post('/', function(req, res) {
  console.log("post");
  model.save(req.body, function(err,id){
    if(err){
      if(err == -1){
        res.status(500).send('同じIDの項目がすでに存在しています。');
      }else{
        res.status(500).send('保存失敗しました。');
      }
    }else{
      res.send(id);
    } 
  });
});

module.exports = router;
