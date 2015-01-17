function karteService($http, $rootScope, $mdToast){
    var errorHandel = function(msg){
       $mdToast.show(
          $mdToast.simple()
            .content(msg).position('top error').hideDelay(800)
        );
    }

    var sucessHandel = function(msg){
       $mdToast.show(
          $mdToast.simple()
            .content(msg).position('top success').hideDelay(500)
        );
    }

    var list = function(success,error){
      $http.get('api/karteitem').success(function(list){       
        success(list);
      }).error(function(msg){
        errorHandel(msg);
      });
    };
/*
    var getElementByName = function(name,success,error){
      $http.get(NODEURL+'api/domain/'+name).success(function(data){ 
        success(data); 
      }).error(function(msg){
        alert(msg);
      });
    };
*/
    
    // console.log($mdToast);
    var saveKarteItem = function(mode,element,success,error){

      if(mode == 1){  //create
         console.log(element);
        $http.post('api/karteitem',element).success(function(data){   
          success(data);
          sucessHandel("保存完了しました。");
        }).error(function(msg){
          errorHandel(msg);
        });
      }else if(mode == 2){ //update
        $http.put('api/karteitem',element).success(function(data){ 
          // $rootScope.addAlert("success","保存完了しました。");    
          success(data);
        }).error(function(msg){
          errorHandel(msg);
        });
      }   
    };
/*
    var deleteElement = function(_id,success,error){
      
      $http.delete(NODEURL+'api/domain/'+_id).success(function(data){
        //$rootScope.addAlert("success","削除完了しました。");    
        success(data);
      }).error(function(msg){
        console.log(msg);
      })
    }

    // var testPost = function(title, success, error){
    //   var req = {
    //     method: 'POST',
    //     url: 'http://localhost:5000/todo/tasks',
    //     headers: {
    //      'Content-Type': 'application/json'
    //     },
    //     data: { title: title },
    //   }
    //   $http(req).success(function(data){       
    //     success(data);
    //   }).error(function(msg){
    //     console.log("failed:"+msg);
    //   });
    // }
    */
    return  {      
        list : list,
        saveKarteItem: saveKarteItem
      };
  }