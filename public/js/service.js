'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var servicesFactory  = angular.module('myApp.services', []);
        //.value('version', '0.1');
servicesFactory.factory('commonToolService',function(){
    
    var json2csv = function (objArray, target, fileName) {
       // var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        //var array =
        var array = typeof objArray != 'object' ? angular.toJson(objArray) : objArray;
        var str = '\ufeff';
        var line = '';
        var changeLine = '\r\n';
        if(IEV>0&&IEV<10){
            alert("Internet Explorer 10以下はcsv出力ができないため、Internet Explorerをアップロード、或は他のブラウザ（chromeを推奨する）をご利用下さい。");
            return;
        }
        if(IEV==-1)changeLine= escape(changeLine);
        /*
        if ($("#labels").is(':checked')) {
            var head = array[0];
            if ($("#quote").is(':checked')) {
                for (var index in array[0]) {
                    var value = index + "";
                    line += '"' + value.replace(/"/g, '""') + '",';
                }
            } else {
                for (var index in array[0]) {
                    line += index + ',';
                }
            }

            line = line.slice(0, -1);
            str += line + changeLine;
        }*/

        for (var i = 0; i < array.length; i++) {
            var line = '';

           // if ($("#quote").is(':checked')) {
                for (var index in array[i]) {
                    var value = array[i][index] + "";
                    line += '"' + value.replace(/"/g, '""') + '",';
                }
           /* } else {
                for (var index in array[i]) {
                    line += array[i][index] + ',';
                }
            }
            */
            line = line.slice(0, -1);
            str += line + changeLine;
        }
        //window.open("data:text/csv;charset=utf-8," + escape(str));
        //window.open("data:text/csv;charset=utf-8," + str);
        $(target).attr('href',"data:text/csv;charset=utf-8," + str);
        $(target).attr('download',fileName);
        if(IEV>9){
            var blob = new Blob([str], {
                    "type": "text/csv;charset=utf-8;"
            });
            navigator.msSaveBlob(blob, fileName);
        }
        return;  
    } ;    
    
    var getPageVariant = function(){
        console.log("Hello World");
    };
    
    return {json2csv:json2csv,
        getPageVariant:getPageVariant
    };
    
});

servicesFactory.factory("pageParameterService",['NODEURL','$http','$q',function(NODEURL,$http,$q){
    var getParameters = function(pageUrl){
        var deferred = $q.defer();
        $http.get(NODEURL+'api/pageparameter/'+pageUrl).success(function(data){     
            deferred.resolve(data);
        }).error(function(msg){
            deferred.reject(data);
        });
        return deferred.promise;  
    }

    var shareData = function(){
        return null;
    }

    return {
        getParameters: getParameters,
        shareData: shareData
    };
}]);

